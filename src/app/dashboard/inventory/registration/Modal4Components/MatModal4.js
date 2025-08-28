"use client";
import React from "react";

import {
  Flex,
  Input,
  Box,
  Switch,
  Text,
  Field,
  NativeSelect,
} from "@chakra-ui/react";

import { FaSyringe } from "react-icons/fa";

export default function MatModal4({ data, setData }) {
  return (
    <Flex
      flexDirection="column"
      bg="white"
      borderRadius="md"
      my={5}
      w="100%"
      boxShadow="xl"
    >
      <Flex alignItems="center" gap={2} p={4}>
        <FaSyringe color="rgba(19,92,254,255)" size={20} />
        <Text color="black" fontWeight="bold" fontSize="lg">
          Revisão de informações{" "}
        </Text>
      </Flex>
    </Flex>
  );
}
