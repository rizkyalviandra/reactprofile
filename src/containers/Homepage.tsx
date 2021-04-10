import React from 'react'
import Head from 'next/head'
import { Box, Divider, Grid, Heading, HStack, Link, Stack, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import SectionContainer from '../components/SectionContainer'
import Topbar from '../components/Topbar'
import ProjectCard from '../components/ProjectCard'
import useDebounce from '../hooks/useDebounce'
import Footer from '../components/Footer'

const Homepage = () => {
  const [users, setUsers] = React.useState<any>()
  const [repos, setRepos] = React.useState<any>()
  const [value, setValue] = React.useState('rizkyalviandra')
  const [loading, setLoading] = React.useState(false)
  
  const fetchUser = async () => {
    await fetch(`https://api.github.com/search/users?q=${value}`)
    .then(response => response.json())
    .then(user => setUsers(user))
  }
  
  const fetchRepos = async () => {
    await fetch(`https://api.github.com/users/${value}/repos`)
    .then(res => res.json())
    .then(repo => setRepos(repo))
  }
  
  React.useEffect(() => {
    setLoading(true)
    fetchUser()
    fetchRepos()
    setLoading(false)
  }, [])

  const handleSearch = () => {
    console.log(value)
    fetchUser()
    fetchRepos()
  }

  // React.useEffect(() => {
  //   console.log(repos)
  // }, [repos])
  
  return (
    <>
      <Head>
        <title>Rizky Alviandra | Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar onClick={handleSearch} onInput={(e:React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}/>
      <SectionContainer paddingY="24" marginTop="16">
        <Grid
          justifyItems={{ base: "center", lg: "flex-start" }}
          templateColumns={{ base: "1fr", lg: "1.5fr 2fr 1fr" }}
          textAlign={{ base: "center", lg: "left" }}
          gap="8"
        >
          <Image
            borderWidth="medium"
            borderColor="gray.800"
            borderStyle="solid"
            borderRadius="full"
            boxSize="200px"
            fallbackSrc="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            src={users?.items[0]?.avatar_url}
            alt={users?.items[0]?.login}
          />
          <Stack textAlign={{ base: "center", lg: "left" }}>
            <Heading size="lg">
              Github Name:{" "}
              <Box
                display="inline-block"
                // backgroundColor="purple.600"
                padding="2"
                color="white"
              >
                <Text>{users?.items[0].login}</Text>
              </Box>
            </Heading>
          </Stack>
        </Grid>
      </SectionContainer>
      <SectionContainer paddingY="16">
        <Stack>
          <Heading size="lg" textAlign="center">
            Projects and Contribution
          </Heading>
          <Text textAlign="center">
            I have {repos?.length} open source projects. You can see all of my open source project <Link href={`https://github.com/${value}?tab=repositories`} color="twitter.500">here</Link>.
          </Text>
        </Stack>

        <Divider marginY="8" />

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
          justifyContent="center"
        >
          {repos?.slice(0,9).map(repo => (
            <ProjectCard {...repo} key={repos.name}/>
          ))}
        </Grid>
      </SectionContainer>
      <Footer />
    </>
  )
}

export default Homepage
