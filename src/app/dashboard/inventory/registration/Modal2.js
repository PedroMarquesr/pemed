"use client"
import React, { useState } from "react"

import { Box, Flex, Input, Text, Field, NativeSelect } from "@chakra-ui/react"
import { LuPill } from "react-icons/lu"

export default function Modal2() {
  return (
    <Flex
      flexDirection={"column"}
      bg="white"
      borderRadius={"md"}
      my={"5"}
      w={"100%"}
      h={"auto"}
      boxShadow={"xl"}
    >
      <Flex h={"5"} alignItems="center" gap="2" p="4">
        <LuPill color="rgba(19,92,254,255)" size={20} />
        <Text color={"black"} fontWeight={"900"}>
          Classificação e especificações{" "}
        </Text>
      </Flex>
      <Flex p="4">
        <Field.Root>
          <Field.Label fontWeight={"bold"}>Registro ANVISA: </Field.Label>
          <Input
            width="35vw"
            boxShadow={"md"}
            bg="white"
            mb={"4"}
            color="black"
            borderRadius="md"
            border={"1px, solid, #2b4d52ff"}
            px="3"
            py="2"
            _hover={{
              borderColor: "#5d8288c4",
            }}
            placeholder="Digite o registro"
          />
        </Field.Root>
        <Field.Root>
          <Field.Label fontWeight={"bold"}>Validade do Registro: </Field.Label>
          <Input
            width="35vw"
            boxShadow={"md"}
            bg="white"
            mb={"4"}
            color="black"
            borderRadius="md"
            border={"1px, solid, #2b4d52ff"}
            px="3"
            py="2"
            type="date"
            _hover={{
              borderColor: "#5d8288c4",
            }}
            placeholder="Validade do registro"
          />
        </Field.Root>
      </Flex>
    </Flex>
  )
}
