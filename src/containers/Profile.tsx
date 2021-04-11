import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Center, Divider, Flex, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { Tooltip } from '@chakra-ui/tooltip'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord, FaCode, FaCogs, FaMobileAlt } from 'react-icons/fa'
import { Image } from '@chakra-ui/image'
import SectionContainer from '../components/SectionContainer'
import SocialMediaButton, { SocialMediaButtonProps } from '../components/SocialMediaButton'
import SkillCard, { SkillCardProps } from '../components/SkillCard'
import Footer from '../components/Footer'
import WorkingCard, { WorkingCardProps } from '../components/WorkingCard'
import ProjectCard, { ProjectCardProps } from '../components/ProjectCard'

const Projects:ProjectCardProps[] = [
  {
    name: "GoPet",
    description: "I made a Gopet App project for my college assignment. This application is used to make it easier for pet owners to care for their pets. I created this application using React Native and Firebase",
    html_url: "https://github.com/rizkyalviandra/GoPet"
  },
  {
    name: "id.reactjs.org",
    description: "I contributed to translating the documentation from React.JS into Indonesian",
    html_url: "https://github.com/rizkyalviandra/id.reactjs.org"
  },
  {
    name: "Gatsby",
    description: "I made a pull request for an example of using Auth0 in gatsby",
    html_url: "https://github.com/rizkyalviandra/gatsby"
  },
]

const WorkingExperience:WorkingCardProps[] = [
  {
    name: "Kanca Studio",
    description: "I am working on a ERP system using Next Js for the front end and Hasura service as the Backend and I use Typescript as Type checking. for ApI integration, I use graphql and for database I use postgress.",
    year: "Nov 2029 - current",
  },
  {
    name: "Trimagnus Prima Dharma",
    description: "In trimagnus prima dharma, I worked on an e-commerce project and I initiated the project using React Js for the front end and using Express Js for the backend. In doing this project, I used waterfall software development which was later changed to use agile software development.",
    year: "Sep 2019 - Aug 2020",
  },
  {
    name: "PT. Mavens Mitra Perkasa",
    description: "I'm internship in PT. Mavens Mitra Perkasa and I finished project for cctv remote using php. In another case, I'm maintenance their project using Angular and Laravel",
    year: "Aug 2018 - Sep 2018",
  },
]

const SocialMedias:SocialMediaButtonProps[] = [
  {
    href: "mailto:rizkyalviandra@gmail.com",
    "aria-label": "gmail",
    icon: <FaEnvelope />,
  },
  {
    href: "https://www.linkedin.com/in/rizkyalviandra/",
    "aria-label": "linkedin",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/rizkyalviandra",
    "aria-label": "github",
    icon: <FaGithub />,
  },
  {
    href: "https://discord.gg/cAtQb88tjf",
    "aria-label": "discord",
    icon: <FaDiscord />,
  },
]

const skills: SkillCardProps[] = [
  {
    title: "Frontend Development",
    description:
      "I am very happy to develop a frontend because I can turn my ideas into reality",
    icon: <FaCode size={24} />,
    tools: [
      {
        category: "Development Tools",
        items: [
          {
            title: "React.js",
            description: (
              <>
                I use React.JS as my main development tool in working on projects. I have known React since 2018 from a friend of mine who became my mentor at a workshop. I started exploring the React library for mobile and website until recently.
              </>
            ),
          },
          {
            title: "Next.js",
            description: (
              <>
                I use Next.JS as a server side framework to help me improve the initial loading performance of the website and enable SEO.
              </>
            ),
          },
          {
            title: "Typescript",
            description: (
              <>
                I use typescript for static typing to construct data structure in my project to reduce errors before runtime
              </>
            ),
          },
        ],
      },
      {
        category: "Integration",
        items: [
          {
            title: "GraphQL Code Generator",
            description: (
              <>
                I like using Graphql Code Generator because Graphql Code Generator can change Graphql queries and mutations to custom hooks so that I can use the code more easily.
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Backend Development",
    description:
      "I developed a backend service to handle data management from the server to the user interface",
    icon: <FaCogs size={24} />,
    tools: [
      {
        category: "Development Tools",
        items: [
          {
            title: "Express JS",
            description: (
              <>
                I use Express js because I am getting used to javascript and when I learn express js, it is easier for me to understand it compared to other frameworks
              </>
            ),
          },
          {
            title: "Golang",
            description: (
              <>
                I am interested in learning Golang because I want to expand the programming language that I can master to help me improve my skills
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Mobile Development",
    description:
      "I develop mobile applications so that I can build applications not only websites but also mobile applications. Mobile Development has a promising future in my opinion",
    icon: <FaMobileAlt size={24} />,
    tools: [
      {
        category: "Hybrid",
        items: [
          {
            title: "React Native",
            description: (
              <>
                React Native is the first javascript library I studied in 2018. I use React Native as the main development tool for mobile development because the code in React Native is similar to React.JS
              </>
            ),
          },
          {
            title: "Flutter",
            description: (
              <>
                I got to know flutter in 2019 from a friend of mine. I'm trying to develop a mobile app using flutter and I'm quite comfortable developing it as I think the system requirements are pretty light.
              </>
            ),
          },
        ],
      },
      {
        category: "Native",
        items: [
          {
            title: "Java",
            description: (
              <>
                I studied Android Native when I was in college. I just learned a little from Android Native because I still want to explore the website first
              </>
            ),
          },
        ],
      },
    ],
  },
];

const Profile = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuBackgroundColor = useColorModeValue("white", "gray.900");
  return (
    <>
      <Head>
        <title>Rizky Alviandra | Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
      boxShadow="md"
      paddingY="4"
      paddingX="8"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top="0"
      left="0"
      right="0"
      backgroundColor={menuBackgroundColor}
      zIndex="sticky"
      >
        <Grid templateColumns="repeat(2, 1fr)" gap="8" alignItems="center">
          <Link href="/">
            <a>
              <Heading size="md">Github Profile</Heading>
            </a>
          </Link>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap="8" alignItems="center">
          <Link href="/api/auth/logout">
            <a>
              <Heading size="md">Logout</Heading>
            </a>
          </Link>
          <GridItem>
            <Tooltip
              label={
                colorMode === "dark" ? "Active light mode" : "Active dark mode"
              }
            >
              <IconButton
                icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
                aria-label="colorMode"
                onClick={toggleColorMode}
                borderRadius="full"
              />
            </Tooltip>
          </GridItem>
        </Grid>
      </Flex>
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
            src="https://media-exp1.licdn.com/dms/image/C5603AQE3yNuC0zc-2Q/profile-displayphoto-shrink_200_200/0/1618046753594?e=1623283200&v=beta&t=YKjfG2gAg9gLbHziX8N6Byvef4pY_ig3U9yRcnS3RYI"
            alt="Rizky Alviandra"
          />
          <Stack textAlign={{ base: "center", lg: "left" }}>
            <Heading size="xl">Hello,</Heading>
            <Heading size="lg">
              I'm Rizky Alviandra
            </Heading>
            <Text>
              I am a Frontend Developer who likes to use React.JS as my main library to work on projects. I am very happy to explore React.JS and now I am deep in testing and performance on React.JS so that I can create applications that are easy to maintain and have good performance
            </Text>
            <Divider marginY="4" />
            <GridItem>
              <Center>
            <Stack direction="row">
              {SocialMedias.map((socialMedia) => (
                <SocialMediaButton
                  {...socialMedia}
                  mode="light"
                  key={socialMedia["aria-label"]}
                />
              ))}
            </Stack>
            </Center>
          </GridItem>
          </Stack>
        </Grid>
      </SectionContainer>
      <SectionContainer paddingBottom="32" paddingTop="4">
        <Heading size="lg" textAlign="center">
          Skill and Journey
        </Heading>
        <Divider marginY="4" />
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "repeat(3, 1fr)",
          }}
          marginTop="8"
          gap="4"
        >
          {skills.map((skill) => (
            <SkillCard {...skill} key={skill.title} />
          ))}
        </Grid>
      </SectionContainer>
      <SectionContainer paddingY="16">
          <Heading size="lg" textAlign="center">
            Working Experience
          </Heading>

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
          {WorkingExperience.map((working) => (
            <WorkingCard {...working} key={working.name} />
          ))}
        </Grid>
      </SectionContainer>
      <SectionContainer paddingY="16">
          <Heading size="lg" textAlign="center">
            Project and Contribution
          </Heading>

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
          {Projects.map((project) => (
            <ProjectCard {...project} key={project.name} />
          ))}
        </Grid>
      </SectionContainer>
      <Footer />
    </>
  )
}

export default Profile
