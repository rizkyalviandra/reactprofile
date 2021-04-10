import React from "react";
import { Divider, Flex, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";
import LinkButton from "./LinkButton";

export type ProjectCardProps = {
  name: string;
  description: string;
  html_url: string;
};

const ProjectCard = ({ name, description, html_url }: ProjectCardProps) => {
  const backgroundColor = useColorModeValue("white", "gray.900");
  return (
    <Link href={html_url} _hover={{ textDecoration: "none" }} borderRadius="lg">
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
        <LinkButton href={html_url} colorScheme="purple">
          See Project
        </LinkButton>
      </Flex>
    </Link>
  );
};

export default ProjectCard;