"use client";
import React from "react";
import {
  Flex,
  Input,
  Text,
  Box,
  Field,
  Switch,
  NativeSelect,
} from "@chakra-ui/react";
import { FaSyringe } from "react-icons/fa";

export default function MatModal2({ data, setData }) {
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
        <FaSyringe color="rgba(19,92,254,255)" size={20} />
        <Text color="black" fontWeight="bold" fontSize="lg">
          Classificação
        </Text>
      </Flex>
      <Flex p={4} gap={4} alignItems={"center"} justifyContent={"center"}>
        <Field.Root>
          <Flex alignItems="center" gap={4} justifyContent={"center"}>
            <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
              Contém registro completo na Anvisa
            </Field.Label>
            <Switch.Root
              checked={data.contemRegistroAnvisa}
              onCheckedChange={(e) =>
                setData({ ...data, contemRegistroAnvisa: e.checked })
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
      {data.contemRegistroAnvisa && (
        <Flex p={4} gap={4} justifyContent="space-between">
          <Field.Root flex="1" minW="0">
            <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
              Registro ANVISA
            </Field.Label>
            <Input
              placeholder="Digite o registro"
              maxLength={11}
              bg="white"
              boxShadow="md"
              border="1px solid #2b4d52ff"
              _hover={{ borderColor: "#5d8288c4" }}
            />
          </Field.Root>

          <Box flex="1" minW="0"></Box>
        </Flex>
      )}

      <Flex p={4} gap={4} alignItems={"center"} justifyContent={"center"}>
        <Field.Root>
          <Flex alignItems="center" gap={4} justifyContent={"center"}>
            <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
              Sujeito a notificação simplificada
            </Field.Label>
            <Switch.Root
              checked={data.refNormativaNotificacaoSimplificada}
              onCheckedChange={(e) =>
                setData({
                  ...data,
                  refNormativaNotificacaoSimplificada: e.checked,
                })
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
      {data.refNormativaNotificacaoSimplificada && (
        <Flex p={4} gap={4} justifyContent="space-between">
          <Field.Root flex="1" minW="0">
            <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
              Referência normativa (RDC aplicável)
            </Field.Label>
            <Input
              placeholder="RDC xx/xxxx"
              bg="white"
              boxShadow="md"
              border="1px solid #2b4d52ff"
              _hover={{ borderColor: "#5d8288c4" }}
            />
          </Field.Root>

          <Box flex="1" minW="0"></Box>
        </Flex>
      )}

      <Flex p={4} gap={4} justifyContent="space-between">
        <Field.Root flex="1" minW="0">
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            Classificação de Risco
          </Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              unstyled
              value={data.classificacaoDeRisco}
              onChange={(e) =>
                setData({ ...data, classificacaoDeRisco: e.target.value })
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
              <option value={""}>Selecione</option>
              <option value={"Classe I"}>Classe I (Baixo Risco)</option>
              <option value={"Classe II"}>Classe II (Médio Risco)</option>
              <option value={"Classe III"}>Classe III (Alto Risco)</option>
              <option value={"Classe IV"}>Classe IV (Máximo Risco)</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>

        <Box flex="1" minW="0"></Box>
      </Flex>
      <Flex p={4} gap={4} justifyContent="space-between">
        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            Composição principal
          </Field.Label>
        </Field.Root>
      </Flex>
    </Flex>
  );
}
