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
import { useState } from "react"

import { LuPill } from "react-icons/lu"

export default function Modal3() {
  const optionTermolabil = [
    { label: "termolabil", option: "nao" },
    { label: "termolabil", option: "sim" },
  ]

  const [forma, setForma] = useState("")
  const [unidadeFornecimento, setUnidadeFornecimento] = useState("")
  const [termolabil, setTermolabil] = useState(false)
  const [controlado, setControlado] = useState(false)

  const [data, setData] = useState({
    forma: "",
    termolabil: false,
    controlado: false,
  })

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
      {JSON.stringify(data)}
      <Flex p={4} gap={4} justifyContent="space-between">
        <Field.Root flex="1" minW="0">
          <Field.Label fontWeight="bold">Forma Farmacêutica</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              unstyled
              value={data.forma}
              onChange={(e) => {
                setData({ ...data, forma: e.target.value })
                setUnidadeFornecimento("")
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

        {data.forma && formasFarmaceuticas[data.forma] ? (
          <Field.Root flex="1" minW="0">
            <Field.Label fontWeight="bold">Unidade de fornecimento</Field.Label>
            <NativeSelect.Root>
              <NativeSelect.Field
                unstyled
                value={unidadeFornecimento}
                onChange={(e) => setUnidadeFornecimento(e.target.value)}
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
                {formasFarmaceuticas[data.forma].map((emb) => (
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
      <Flex p={4} gap={4} justifyContent="space-between">
        <Field.Root flex="1">
          <Field.Label>Via de administração: </Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              unstyled
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
              {viaAdministracao.via.map((via) => (
                <option key={via} value={via}>
                  {via}
                </option>
              ))}
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>
        <Box flex="1"></Box>
      </Flex>
      <Flex p={4} gap={4} justifyContent={"space-between"}>
        <Field.Root>
          <Field.Label>Quantidade de unidades por embalagem</Field.Label>
          <Input
            placeholder="Apenas números"
            maxLength={11}
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Dosagem/Concentração</Field.Label>
          <Input
            placeholder="Ex: 500mg, 5%, 100UI/ml"
            maxLength={11}
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>
      </Flex>
      <Flex
        p={4}
        gap={4}
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        <Flex flexDirection={"row"}>
          <Field.Root>
            <Flex alignItems="center" gap={4}>
              <Field.Label>Medicamento controlado ?</Field.Label>
              <Switch.Root
                checked={controlado}
                onCheckedChange={(e) => setControlado(e.checked)}
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
        <Box>
          <Field.Root>
            <Flex alignItems="center" gap={4}>
              <Field.Label>Medicamento termolábil ?</Field.Label>
              <Switch.Root
                checked={termolabil}
                onCheckedChange={(e) => setTermolabil(e.checked)}
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
        </Box>
        {termolabil && (
          <>
            <Flex>
              <Field.Root flex="1">
                <Field.Label>
                  Informe a faixa de temperatura indicada
                </Field.Label>
                <Input
                  placeholder="Exemplo: 8°C a 12°C"
                  width="100%"
                  bg="white"
                  boxShadow="md"
                  color="black"
                  borderRadius="md"
                  border="1px solid #2b4d52ff"
                  _hover={{
                    borderColor: "#5d8288c4",
                  }}
                />
              </Field.Root>
              <Box flex="1" minW="0"></Box>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  )
}
