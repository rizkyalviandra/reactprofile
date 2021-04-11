import React from 'react'
import Link from 'next/link'
import { Flex, Grid, GridItem, Heading, HStack } from '@chakra-ui/layout'
import { Input, Text } from '@chakra-ui/react'
import { Button, IconButton } from '@chakra-ui/button'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'

interface Props {
  onInput: any,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Topbar = ({ onInput, onClick }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuBackgroundColor = useColorModeValue("white", "gray.900");

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
      <HStack spacing="-1px" marginRight="10px">
        <Input 
        borderRadius="0px"
          placeholder="Github username" 
          onChange={onInput} 
          width="300px"
        />
        <Button paddingTop="" borderRadius="0px" onClick={onClick}>Search</Button>
      </HStack>
      <Grid templateColumns="repeat(2, 1fr)" gap="8" alignItems="center">
        <Link href="/api/auth/logout">
          <a>
            <Heading size="md">Logout</Heading>
          </a>
        </Link>
        <GridItem>
            <IconButton
              icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
              aria-label="colorMode"
              onClick={toggleColorMode}
              borderRadius="full"
            />
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default Topbar
