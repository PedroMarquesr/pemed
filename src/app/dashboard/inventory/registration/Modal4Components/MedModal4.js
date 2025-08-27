"use client"
import React from "react"

import {
  Flex,
  Input,
  Box,
  Switch,
  Text,
  Field,
  NativeSelect,
} from "@chakra-ui/react"
import formasFarmaceuticas from "@/data/inventory/formasFarmaceuticas.js"
import viaAdministracao from "@/data/inventory/viaAdministracao.js"

import { LuPill } from "react-icons/lu"

export default function MedModal4({ data, setData }) {
  return (
    <Flex
      flexDirection="column"
      bg="white"
      borderRadius="md"
      my={5}
      w="100%"
      boxShadow="xl"
    >
      <Flex p={4} gap={4} justifyContent="space-between">
        <Field.Root flex="1" minW="0">
          <Field.Label fontWeight="bold">Forma Farmacêutica</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              unstyled
              value={data.dosageForm}
              onChange={(e) => {
                setData({ ...data, dosageForm: e.target.value })
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
              {Object.keys(formasFarmaceuticas).map((dosageForm) => (
                <option key={dosageForm} value={dosageForm}>
                  {dosageForm}
                </option>
              ))}
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>

        {data.dosageForm && formasFarmaceuticas[data.dosageForm] ? (
          <Field.Root flex="1" minW="0">
            <Field.Label fontWeight="bold">Unidade de fornecimento</Field.Label>
            <NativeSelect.Root>
              <NativeSelect.Field
                unstyled
                value={data.supplyUnit}
                onChange={(e) =>
                  setData({ ...data, supplyUnit: e.target.value })
                }
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
                {formasFarmaceuticas[data.dosageForm].map((emb) => (
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
