"use client"
import React from "react"
import {
  Flex,
  Input,
  Text,
  Field,
  NativeSelect,
  NativeSelectField,
} from "@chakra-ui/react"
import formasFarmaceuticas from "../../../../../data/inventory/formasFarmaceuticas.js"
import { useState } from "react"

import { LuPill } from "react-icons/lu"

export default function Modal3() {
  const [forma, setForma] = useState("comprimido")
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
        <Field.Root width="100%" maxWidth="500px">
          <Field.Label fontWeight="bold">Forma Farmacêutica</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              unstyled
              value={forma}
              onChange={(e) => {
                setForma(e.target.value)
                setEmbalagem("") // reseta embalagem ao trocar forma
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
              {Object.keys(formasFarmaceuticas).map((forma) => (
                <option key={forma} value={forma}>
                  {forma}
                </option>
              ))}
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>
        {forma && formasFarmaceuticas[forma] && (
          <Box>
            <>
              <Field.Root>
                <NativeSelect.Root>
                  <Field.Label fontWeight="bold">
                    Forma Farmacêutica
                  </Field.Label>

                  <NativeSelect.Field
                    value={embalagem}
                    onChange={(e) => setEmbalagem(e.target.value)}
                  >
                    {formasFarmaceuticas[forma].map((emb) => (
                      <option key={emb} value={emb}>
                        {emb}
                      </option>
                    ))}
                  </NativeSelect.Field>
                </NativeSelect.Root>
              </Field.Root>
            </>
          </Box>
        )}
      </Flex>
    </Flex>
  )
}
