"use client"
import React from "react"
import {
  Flex,
  Input,
  Box,
  Text,
  Field,
  NativeSelect,
  NativeSelectField,
} from "@chakra-ui/react"
import formasFarmaceuticas from "../../../../../data/inventory/formasFarmaceuticas.js"
import { useState } from "react"

import { LuPill } from "react-icons/lu"

export default function Modal3() {
  const [forma, setForma] = useState("")
  const [embalagem, setEmbalagem] = useState("")
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
          Especificações Técnicas
        </Text>
      </Flex>

      <Flex p={4} gap={4} justifyContent="space-between">
        <Field.Root flex="1" minW="0">
          <Field.Label fontWeight="bold">Forma Farmacêutica</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              unstyled
              value={forma}
              onChange={(e) => {
                setForma(e.target.value)
                setEmbalagem("")
              }}
              width="100%"
              bg="white"
              boxShadow="md"
              color="black"
              borderRadius="md"
              border="1px solid #2b4d52ff"
              px={3}
              py={2}
              _hover={{
                borderColor: "#5d8288c4",
              }}
            >
              <option value={""}>Selecione</option>
              {Object.keys(formasFarmaceuticas).map((forma) => (
                <option key={forma} value={forma}>
                  {forma}
                </option>
              ))}
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>

        {/* Campo 2 (condicional ou placeholder) */}

        {forma && formasFarmaceuticas[forma] ? (
          <Field.Root flex="1" minW="0">
            <Field.Label fontWeight="bold">Unidade de fornecimento</Field.Label>
            <NativeSelect.Root>
              <NativeSelect.Field
                unstyled
                value={embalagem}
                onChange={(e) => setEmbalagem(e.target.value)}
                width="100%"
                bg="white"
                boxShadow="md"
                color="black"
                borderRadius="md"
                border="1px solid #2b4d52ff"
                px={3}
                py={2}
                _hover={{
                  borderColor: "#5d8288c4",
                }}
              >
                <option value="">Selecione uma forma</option>
                {formasFarmaceuticas[forma].map((emb) => (
                  <option key={emb} value={emb}>
                    {emb}
                  </option>
                ))}
              </NativeSelect.Field>
            </NativeSelect.Root>
          </Field.Root>
        ) : (
          <Box flex="1" minW="0" />
        )}
      </Flex>
    </Flex>
  )
}
