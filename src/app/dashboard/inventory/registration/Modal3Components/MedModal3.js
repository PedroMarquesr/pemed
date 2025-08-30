"use client";
import React from "react";

import {
  Flex,
  Input,
  Box,
  Switch,
  Text,
  Field,
  NativeSelect,
} from "@chakra-ui/react";
import formasFarmaceuticas from "@/data/inventory/formasFarmaceuticas.js";
import viaAdministracao from "@/data/inventory/viaAdministracao.js";

import { LuPill } from "react-icons/lu";

export default function MedModal3({ data, setData }) {
  const liquidForms = [
    "Solução oral",
    "Xampu",
    "Solução injetável",
    "Solução tópica",
    "Colírio (solução oftálmica)",
    "Soro fisiológico",
    "Suspensão oral",
    "Suspensão injetável",
    "Xarope",
    "Aerosol",
    "Inalador / Nebulizador",
  ];
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
        <Field.Root flex="2" minW="0">
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            Forma Farmacêutica
          </Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              unstyled
              value={data.dosageForm}
              onChange={(e) => {
                setData({ ...data, dosageForm: e.target.value });
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
          <>
            <Field.Root flex="1" minW="0">
              <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                Unidade de fornecimento
              </Field.Label>
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
            <Box flex="1" minW="0">
              {liquidForms.includes(data.dosageForm) && (
                <Field.Root>
                  <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                    Volume disponível (mL){" "}
                  </Field.Label>
                  <Input
                    value={data.contentVolume}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contentVolume: e.target.value,
                      })
                    }
                    placeholder="Ex: 100ML, 200ML, 20ML"
                    maxLength={4}
                    bg="white"
                    boxShadow="md"
                    border="1px solid #2b4d52ff"
                    _hover={{ borderColor: "#5d8288c4" }}
                  />
                </Field.Root>
              )}
            </Box>
          </>
        ) : (
          <>
            <Box flex="1" minW="0" />
            <Box flex="1" minW="0" />
          </>
        )}
      </Flex>
      <Flex p={4} gap={4} justifyContent="space-between">
        <Field.Root flex="1">
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            Via de administração:{" "}
          </Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              unstyled
              value={data.administrationRoute}
              onChange={(e) =>
                setData({ ...data, administrationRoute: e.target.value })
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
        <Field.Root flex="1">
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            Quantidade de unidades por embalagem
          </Field.Label>
          <Input
            value={data.packageQuantity}
            onChange={(e) =>
              setData({
                ...data,
                packageQuantity: Number(e.target.value),
              })
            }
            placeholder="Apenas números"
            maxLength={4}
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>
        <Box flex="1"></Box>
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
              <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                Medicamento controlado ?
              </Field.Label>
              <Switch.Root
                checked={data.isControlledSubstance}
                onCheckedChange={(e) =>
                  setData({ ...data, isControlledSubstance: e.checked })
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
        <Box>
          <Field.Root>
            <Flex alignItems="center" gap={4}>
              <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                Medicamento termolábil ?
              </Field.Label>
              <Switch.Root
                checked={data.isThermolabile}
                onCheckedChange={(e) =>
                  setData({ ...data, isThermolabile: e.checked })
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
        </Box>
        {data.thermolabile && (
          <>
            <Flex>
              <Field.Root flex="1">
                <Field.Label>
                  Informe a faixa de temperatura indicada
                </Field.Label>
                <Input
                  value={data.temperatureRange}
                  onChange={(e) =>
                    setData({ ...data, temperatureRange: e.target.value })
                  }
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
  );
}
