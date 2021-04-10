import React from "react";
import { Divider, Flex, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";

export type WorkingCardProps = {
  name: string;
  description: string;
  year: string;
};

const WorkingCard = ({ name, description, year }: WorkingCardProps) => {
  const backgroundColor = useColorModeValue("white", "gray.900");
  return (
      <Flex
        borderWidth="thin"
        borderRadius="lg"
        padding="8"
        width="100%"
        height="100%"
        boxShadow="md"
        backgroundColor={backgroundColor}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading size="md" textAlign="center">
          {name}
        </Heading>
        <Divider marginY="4" />
        <Text textAlign="center">{description}</Text>
        <Divider marginY="4" />
        <Text textAlign="center">{year}</Text>
      </Flex>
  );
};

export default WorkingCard;