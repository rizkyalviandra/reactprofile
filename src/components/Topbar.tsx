import React from 'react'
import Link from 'next/link'
import { Flex, Grid, GridItem, Heading } from '@chakra-ui/layout'
import { Input, Text } from '@chakra-ui/react'
import { Button, IconButton } from '@chakra-ui/button'
import { Tooltip } from '@chakra-ui/tooltip'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  onInput: any,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Topbar = ({ onInput, onClick }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuBackgroundColor = useColorModeValue("white", "gray.900");
  const { logout } = useAuth0()

  return (
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
            <Heading size="md">Github Searching</Heading>
          </a>
        </Link>
        <Link href="/profile">
          <a>
            <Text size="lg">Profile</Text>
          </a>
        </Link>
      </Grid>
      <div>
        <Input placeholder="Github username" onChange={onInput} width="300px"/>
        <Button onClick={onClick}>Search</Button>
      </div>
      <Grid templateColumns="repeat(2, 1fr)" gap="8" alignItems="center">
        <Button colorScheme="blue" onClick={() => logout()} variant="ghost">Logout</Button>
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
  )
}

export default Topbar
