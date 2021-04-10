import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export type SkillCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  tools: {
    category: string;
    items: { title: string; description: React.ReactNode }[];
  }[];
};

const SkillCard = ({ title, description, icon, tools }: SkillCardProps) => {
  const backgroundColor = useColorModeValue("white", "gray.900");
  return (
    <Flex
      backgroundColor={backgroundColor}
      borderWidth="thin"
      borderRadius="lg"
      padding="4"
      width="100%"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      boxShadow="md"
    >
      <Box
        display="inline-block"
        padding="4"
        marginBottom={4}
        borderWidth="thin"
        borderRadius="full"
      >
        {icon}
      </Box>
      <Stack spacing="4" marginBottom="4">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <Divider marginTop="8" />
        <Tabs
          variant="soft-rounded"
          colorScheme="purple"
          size="sm"
          align="center"
        >
          <TabList>
            {tools.map(({ category }) => (
              <Tab key={category}>{category}</Tab>
            ))}
          </TabList>

          <TabPanels>
            {tools.map(({ category, items }) => (
              <TabPanel key={category}>
                <Accordion allowMultiple>
                  {items.map(({ title, description }) => (
                    <AccordionItem key={title}>
                      <AccordionButton>
                        <Stack direction="row">
                          <AccordionIcon />
                          <Heading size="xs">{title}</Heading>
                        </Stack>
                      </AccordionButton>
                      <AccordionPanel>
                        <Text fontSize="sm" textAlign="left">
                          {description}
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Stack>
    </Flex>
  );
};

export default SkillCard;