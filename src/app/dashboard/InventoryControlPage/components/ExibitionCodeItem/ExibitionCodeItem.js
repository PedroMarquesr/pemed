"use client";

import { Flex, Text, Badge } from "@chakra-ui/react";

export default function ExibitionCodeItem({ data }) {
  let codItem = data.idItemForUser;

  return (
    <>
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
        mt={"2"}
        mr={"4"}
        boxShadow={"md"}
        borderRadius="md"
      >
        <Badge size="lg" colorPalette="green" px={"3"} variant="solid">
          <Flex flexDirection={"column"}>
            <Text fontSize="xl" pt={"2"}>
              Código do item:
            </Text>
            <Text fontSize={"xl"} textAlign={"center"} px={"5"} py={"1"} >
              {codItem}
            </Text>
          </Flex>
        </Badge>
      </Flex>
    </>
  );
}
