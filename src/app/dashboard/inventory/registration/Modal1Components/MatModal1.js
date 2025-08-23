"use client";

import React, { useState } from "react";

import {
  Box,
  Flex,
  Input,
  Text,
  Field,
  NativeSelect,
  Switch,
} from "@chakra-ui/react";

export default function MedModal1() {
  const [selectedCategory, setSelectedCategory] = useState("Genérico");
  let codItem = "MAT12345";
  return (
    <Flex w={"100%"}>
      <Box flex="1" p="4" borderRadius="md">
        <Box mt="4">
          <Field.Root>
            <Field.Label
              fontSize="sm"
              fontWeight="bold"
              color="gray.700"
              mb={2}
            >
              Nome comercial:
            </Field.Label>
            <Input
              width="35vw"
              boxShadow="md"
              bg="white"
              mb="4"
              color="black"
              borderRadius="md"
              border="1px solid #2b4d52ff"
              px="3"
              py="2"
              _hover={{ borderColor: "#5d8288c4" }}
              placeholder="Digite o nome comercial"
            />
          </Field.Root>
        </Box>

        <Box>
          <Field.Root>
            <Field.Label
              fontSize="sm"
              fontWeight="bold"
              color="gray.700"
              mb={2}
            >
              Fabricante:
            </Field.Label>
            <Input
              width="35vw"
              bg="white"
              boxShadow={"md"}
              mb={"4"}
              color="black"
              borderRadius="md"
              border={"1px, solid, #2b4d52ff"}
              px="3"
              py="2"
              _hover={{
                borderColor: "#5d8288c4",
              }}
              placeholder="Digite o nome do fabricante"
            />
          </Field.Root>
        </Box>
      </Box>

      <Flex
        flexDirection={"column"}
        flex="1"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          justifyContent={"left"}
          fontSize="xl"
          fontWeight="bold"
          color="gray.700"
          mb={2}
        >
          Código do item
        </Text>
        <Text
          textAlign={"center"}
          justifyContent={"center"}
          alignItems={"center"}
          border={"2px solid #0c142e"}
          p={"4px"}
          width="10vw"
          boxShadow={"md"}
          borderRadius="md"
        >
          {codItem}
        </Text>
      </Flex>
    </Flex>
  );
}
