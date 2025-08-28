"use client";
import React from "react";
import { Flex, Input, Text, Field, Switch, Box } from "@chakra-ui/react";
import { LuPill } from "react-icons/lu";
import { anvisaCodeRequired } from "@/app/dashboard/inventory/registration/utils/constants.js";

export default function MedModal2({ data, setData }) {
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
      {!anvisaCodeRequired.includes(data.categoriaRegulatoria) ? (
        <Flex p={4} gap={4} alignItems={"center"} justifyContent={"center"}>
          <Field.Root>
            <Flex alignItems="center" gap={4} justifyContent={"center"}>
              <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                Notificação simplificada
              </Field.Label>
              <Switch.Root
                checked={data.hasSimplifiedNotification}
                onCheckedChange={(e) =>
                  setData({ ...data, hasSimplifiedNotification: e.checked })
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
      ) : (
        <Flex p={4} gap={4} justifyContent="space-between">
          <Field.Root flex="1" minW="0">
            <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
              Registro ANVISA
            </Field.Label>
            <Input
              value={data.anvisaRegistrationCode}
              onChange={(e) =>
                setData({
                  ...data,
                  anvisaRegistrationCode: e.target.value,
                })
              }
              placeholder="Digite o registro"
              maxLength={11}
              bg="white"
              boxShadow="md"
              border="1px solid #2b4d52ff"
              _hover={{ borderColor: "#5d8288c4" }}
            />
          </Field.Root>

          <Field.Root flex="1" minW="0">
            <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
              Validade do Registro:
            </Field.Label>
            <Input
              value={data.registrationValidity}
              onChange={(e) =>
                setData({ ...data, registrationValidity: e.target.value })
              }
              type="date"
              bg="white"
              boxShadow="md"
              border="1px solid #2b4d52ff"
              _hover={{ borderColor: "#5d8288c4" }}
            />
          </Field.Root>
        </Flex>
      )}

      {!anvisaCodeRequired.includes(data.categoriaRegulatoria) &&
        !data.hasSimplifiedNotification && (
          <Flex p={4} gap={4} justifyContent="space-between">
            <Field.Root flex="1" minW="0">
              <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                Registro ANVISA
              </Field.Label>
              <Input
                value={data.anvisaRegistrationCode}
                onChange={(e) =>
                  setData({
                    ...data,
                    anvisaRegistrationCode: e.target.value,
                  })
                }
                placeholder="Digite o registro"
                maxLength={11}
                bg="white"
                boxShadow="md"
                border="1px solid #2b4d52ff"
                _hover={{ borderColor: "#5d8288c4" }}
              />
            </Field.Root>

            <Field.Root flex="1" minW="0">
              <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                Validade do Registro:
              </Field.Label>
              <Input
                value={data.registrationValidity}
                onChange={(e) =>
                  setData({ ...data, registrationValidity: e.target.value })
                }
                type="date"
                bg="white"
                boxShadow="md"
                border="1px solid #2b4d52ff"
                _hover={{ borderColor: "#5d8288c4" }}
              />
            </Field.Root>
          </Flex>
        )}
      {data.hasSimplifiedNotification && (
        <Flex p={4} gap={4} justifyContent="space-between">
          <Field.Root flex="1" minW="0">
            <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
              Referência normativa (RDC aplicável)
            </Field.Label>
            <Input
              value={data.simplifiedNotificationReference}
              onChange={(e) =>
                setData({
                  ...data,
                  simplifiedNotificationReference: e.target.value,
                })
              }
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
            Classe terapeutica
          </Field.Label>
          <Input
            value={data.therapeuticClass}
            onChange={(e) =>
              setData({ ...data, therapeuticClass: e.target.value })
            }
            placeholder="Insira a classe"
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>

        <Field.Root flex="1" minW="0">
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            Validade total do medicamento (Em meses):{" "}
          </Field.Label>
          <Input
            value={data.totalDrugValidity}
            onChange={(e) =>
              setData({ ...data, totalDrugValidity: e.target.value })
            }
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
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            Código CMED (GGREM)
          </Field.Label>
          <Input
            value={data.cmedGgremCode}
            onChange={(e) =>
              setData({ ...data, cmedGgremCode: e.target.value })
            }
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
  );
}
