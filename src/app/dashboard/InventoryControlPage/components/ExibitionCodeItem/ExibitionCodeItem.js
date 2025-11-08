"use client";

import { Flex, Text } from "@chakra-ui/react";

export default function ExibitionCodeItem({ data }) {
  let codItem = data.idItemForUser;

  return (
    <>
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="xl" fontWeight="bold" color="gray.700">
          Código do item
        </Text>
        <Text
          textAlign={"center"}
          border={"2px solid #0c142e"}
          boxShadow={"md"}
          borderRadius="md"
        >
          {codItem}
        </Text>
      </Flex>
    </>
  );
}
