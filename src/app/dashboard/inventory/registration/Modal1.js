"use client"
import React, { useState } from "react"
import { Flex, Text, Field, NativeSelect, Box, Switch } from "@chakra-ui/react"
import { LuPill } from "react-icons/lu"
import MedModal1 from "./Modal1Components/MedModal1"
import MatModal1 from "./Modal1Components/MatModal1"

export default function Modal1({
  selectOption,
  setSelectOption,
  data,
  setData,
}) {
  const renderSelectedScreen = () => {
    switch (selectOption) {
      case "Medicamento":
        return <MedModal1 data={data} setData={setData} />
      case "Material":
        return <MatModal1 data={data} setData={setData} />
      case "Insumo":
        return (
          <Box p={4} mt={4} border="1px solid #2b4d52ff" borderRadius="md">
            <Text fontWeight="bold">Tela de Insumo</Text>
          </Box>
        )
      case "Outros":
        return (
          <Box p={4} mt={4} border="1px solid #2b4d52ff" borderRadius="md">
            <Text fontWeight="bold">Tela de Outros</Text>
          </Box>
        )
      default:
        return null
    }
  }

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
          Identificação básica
        </Text>
      </Flex>

      <Flex p={4}>
        <Field.Root width="100%" maxWidth="500px">
          <Field.Label fontWeight="bold">Tipo de item</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              unstyled
              value={data.tipoItem}
              onChange={(e) => {
                const value = e.target.value
                setData({ ...data, tipoItem: e.target.value })
                setSelectOption(value)
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
              <option value={""} selected>
                Selecione
              </option>
              <option value="Medicamento">Medicamento</option>
              <option value="Material">Material</option>
              <option value="Insumo">Insumo</option>
              <option value="Outros">Outros</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>
      </Flex>

      {renderSelectedScreen()}
    </Flex>
  )
}
