"use client";
import React from "react";

import {
  Flex,
  Input,
  Box,
  HStack,
  Text,
  RadioGroup,
  Field,
  NativeSelect,
  NativeSelectField,
} from "@chakra-ui/react";
import formasFarmaceuticas from "@/data/inventory/formasFarmaceuticas.js";
import viaAdministracao from "@/data/inventory/viaAdministracao.js";
import { useState } from "react";

import { LuPill } from "react-icons/lu";

export default function Modal3() {
  const [forma, setForma] = useState("");
  const [embalagem, setEmbalagem] = useState("");
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
                setForma(e.target.value);
                setEmbalagem("");
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
      <Flex p={4} gap={4} justifyContent={"space-between"}>
        <Flex justifyContent={"center"}>
          <Field.Root justifyContent={"center"}>
            <RadioGroup.Root defaultValue="1">
              <Field.Label>Medicamento controlado ?</Field.Label>

              <HStack gap="3" justifyContent={"center"}>
                <RadioGroup.Item key="re" value="re" colorPalette={"blue"}>
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>Sim</RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item key="be" value="be" colorPalette={"blue"}>
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>Não</RadioGroup.ItemText>
                </RadioGroup.Item>
              </HStack>
            </RadioGroup.Root>
          </Field.Root>
        </Flex>
      </Flex>
    </Flex>
  );
}
