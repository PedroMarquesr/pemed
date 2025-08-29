"use client"

import React, { useState } from "react"
import {
  Box,
  Flex,
  Input,
  Text,
  Field,
  NativeSelect,
  Switch,
} from "@chakra-ui/react"

export default function MatModal1({ data, setData }) {
  let codItem = "MAT12345"

  return (
    <Flex w={"100%"}>
      <Box flex="1" p="4" borderRadius="md">
        <Flex p={4} gap={4} alignItems={"center"} justifyContent={"center"}>
          <Field.Root>
            <Flex alignItems="center" gap={4} justifyContent={"center"}>
              <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                Contém nome comercial?
              </Field.Label>
              <Switch.Root
                checked={data.hasBrandName}
                onCheckedChange={(e) =>
                  setData({ ...data, hasBrandName: e.checked })
                }
                colorPalette="blue"
                size="lg"
              >
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
              </Switch.Root>
            </Flex>
          </Field.Root>
        </Flex>

        {data.hasBrandName && (
          <Flex p={4} gap={4} justifyContent="space-between">
            <Field.Root flex="1" minW="0">
              <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                Nome comercial:
              </Field.Label>
              <Input
                value={data.brandName}
                onChange={(e) =>
                  setData({ ...data, brandName: e.target.value })
                }
                width="100%"
                boxShadow="md"
                bg="white"
                color="black"
                borderRadius="md"
                border="1px solid #2b4d52ff"
                px="3"
                py="2"
                _hover={{ borderColor: "#5d8288c4" }}
                placeholder="Digite o nome comercial"
              />
            </Field.Root>
            <Box flex="1" minW="0"></Box>
          </Flex>
        )}

        <Box p={4}>
          <Field.Root>
            <Field.Label
              fontSize="sm"
              fontWeight="bold"
              color="gray.700"
              mb={2}
            >
              Nome técnico:
            </Field.Label>
            <Input
              value={data.technicalName}
              onChange={(e) =>
                setData({ ...data, technicalName: e.target.value })
              }
              width="100%"
              bg="white"
              boxShadow={"md"}
              color="black"
              borderRadius="md"
              border={"1px solid #2b4d52ff"}
              px="3"
              py="2"
              _hover={{
                borderColor: "#5d8288c4",
              }}
              placeholder="Ex: seringa descartável, cateter venoso, luva de procedimento"
            />{" "}
          </Field.Root>
        </Box>

        <Box p={4}>
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
              value={data.manufacturer}
              onChange={(e) =>
                setData({ ...data, manufacturer: e.target.value })
              }
              width="100%"
              bg="white"
              boxShadow={"md"}
              color="black"
              borderRadius="md"
              border={"1px solid #2b4d52ff"}
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
        p={4}
      >
        <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={2}>
          Código do item
        </Text>
        <Text
          textAlign={"center"}
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
  )
}
