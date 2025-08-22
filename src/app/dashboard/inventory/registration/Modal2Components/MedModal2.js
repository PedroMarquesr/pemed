"use client"
import React from "react"
import { Flex, Input, Text, Field } from "@chakra-ui/react"
import { LuPill } from "react-icons/lu"

export default function MedModal2() {
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
        <LuPill color="rgba(19,92,254,255)" size={20} />
        <Text color="black" fontWeight="bold" fontSize="lg">
          Classificação
        </Text>
      </Flex>

      <Flex p={4} gap={4} justifyContent="space-between">
        <Field.Root flex="1" minW="0">
          <Field.Label fontWeight="semibold">Registro ANVISA</Field.Label>
          <Input
            placeholder="Digite o registro"
            maxLength={11}
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>

        <Field.Root flex="1" minW="0">
          <Field.Label fontWeight="semibold">Validade do Registro:</Field.Label>
          <Input
            type="date"
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>
      </Flex>

      <Flex p={4} gap={4} justifyContent="space-between">
        <Field.Root flex="1" minW="0">
          <Field.Label fontWeight="semibold">Classe farmacêutica</Field.Label>
          <Input
            placeholder="Insira a classe"
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>

        <Field.Root flex="1" minW="0">
          <Field.Label>Validade total do medicamento (Em meses): </Field.Label>
          <Input
            type="number"
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>
      </Flex>

      <Flex p={4}>
        <Field.Root width="100%">
          <Field.Label fontWeight="semibold">Código CMED</Field.Label>
          <Input
            placeholder="(Número do medicamento no banco de preços da ANVISA/CMED)."
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
            maxWidth="500px"
          />
        </Field.Root>
      </Flex>
    </Flex>
  )
}
