"use client";
import { Flex, Text } from "@chakra-ui/react";

export default function OverviewSection() {
  return (
    <Flex
      flexDirection="column"
      bg="white"
      borderRadius="md"
      my={5}
      w="100%"
      boxShadow="xl"
    >
      <Text>Visão Geral</Text>
    </Flex>
  );
}
