import React from 'react'
import { Text } from '@chakra-ui/layout'
import SectionContainer from './SectionContainer'

const Footer = () => {
  return (
    <>
      <SectionContainer bg="black" paddingY="8">
        <Text color="white" textAlign="center">
          Copyright &copy; 2021 Rizky Alviandra
        </Text>
      </SectionContainer>
    </>
  )
}

export default Footer
