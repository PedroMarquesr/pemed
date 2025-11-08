"use client";
import { Flex } from "@chakra-ui/react";

export default function SectionContainer({ children, ...props }) {
  return (
    <Flex
      bg="white"
      borderRadius="md"
      my={5}
      w="100%"
      boxShadow="xl"
      flexDirection={"column"}
    >
      {children}
    </Flex>
  );
}
