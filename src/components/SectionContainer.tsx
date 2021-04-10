import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

type SectionContainerProps = BoxProps;
const SectionContainer = ({ children, ...boxProps }: SectionContainerProps) => (
  <Box paddingX={[4, 8, 16, 32, 48, 64, 128]} {...boxProps}>
    {children}
  </Box>
);
export default SectionContainer;