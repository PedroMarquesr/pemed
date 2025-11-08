"use client"
import React from "react"
import {
  Flex,
  Input,
  Text,
  Box,
  Popover,
  Portal,
  Image,
  Button,
  Field,
  Switch,
  NativeSelect,
} from "@chakra-ui/react"
import { FaSyringe } from "react-icons/fa"
import { BsFillInfoCircleFill } from "react-icons/bs"
import { ToggleTip } from "@/components/ui/toggle-tip"

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
              checked={data.hasAnvisaRegistration}
              onCheckedChange={(e) =>
                setData({ ...data, hasAnvisaRegistration: e.checked })
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
      {data.hasAnvisaRegistration && (
        <>
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
                    anvisaRegistrationCode: e.target.value.toUpperCase(),
                  })
                }
                placeholder="Digite o registro"
                maxLength={13}
                bg="white"
                boxShadow="md"
                border="1px solid #2b4d52ff"
                _hover={{ borderColor: "#5d8288c4" }}
              />
            </Field.Root>

            <Box flex="1" minW="0"></Box>
          </Flex>
          <Flex p={4} gap={4} justifyContent="space-between">
            <Field.Root flex="1" minW="0">
              <Flex>
                <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                  Insira o modelo oficial do item (anvisa):
                </Field.Label>
                <Popover.Root positioning={{ placement: "right" }} size={"xs"}>
                  <Popover.Trigger asChild>
                    <Box
                      pl={1}
                      as="span"
                      cursor="pointer"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      color="gray.500"
                      _hover={{ color: "blue.500" }}
                    >
                      <BsFillInfoCircleFill size={16} />
                    </Box>
                  </Popover.Trigger>
                  <Portal>
                    <Popover.Positioner>
                      <Popover.Content w="50vw" maxW="90vw">
                        <Popover.Arrow />
                        <Popover.Body w={"50vw"}>
                          <Image
                            src="/inventory/officialModal.jpg"
                            w="100%"
                            objectFit="contain"
                            borderRadius="md"
                          />
                        </Popover.Body>
                      </Popover.Content>
                    </Popover.Positioner>
                  </Portal>
                </Popover.Root>
              </Flex>
              <Input
                value={data.anvisaModel}
                onChange={(e) =>
                  setData({
                    ...data,
                    anvisaModel: e.target.value.toUpperCase(),
                  })
                }
                placeholder=""
                bg="white"
                boxShadow="md"
                border="1px solid #2b4d52ff"
                _hover={{ borderColor: "#5d8288c4" }}
              />
            </Field.Root>
            <Box flex="1" minW="0"></Box>
          </Flex>
        </>
      )}

      <Flex p={4} gap={4} alignItems={"center"} justifyContent={"center"}>
        <Field.Root>
          <Flex alignItems="center" gap={4} justifyContent={"center"}>
            <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
              Sujeito a notificação simplificada
            </Field.Label>
            <Switch.Root
              checked={data.hasSimplifiedNotification}
              onCheckedChange={(e) =>
                setData({
                  ...data,
                  hasSimplifiedNotification: e.checked,
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
                  simplifiedNotificationReference: e.target.value.toUpperCase(),
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
            Classificação de Risco:
          </Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              unstyled
              value={data.riskClassification}
              onChange={(e) =>
                setData({ ...data, riskClassification: e.target.value })
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
        <Field.Root flex="1" minW="0">
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            Composição principal:
          </Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              unstyled
              value={data.mainComposition}
              onChange={(e) =>
                setData({ ...data, mainComposition: e.target.value })
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
              <option value={"Látex"}>Látex</option>
              <option value={"Polipropileno"}>Polipropileno</option>
              <option value={"PVC"}>PVC</option>
              <option value={"Silicone"}>Silicone</option>
              <option value={"Algodão"}>Algodão</option>
              <option value={"Aço inoxidável"}>Aço inoxidável</option>
              <option value={"vidro"}>Vidro</option>
              <option value={"Outros"}>Outros</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>
        <Box flex="1" minW="0">
          {data.mainComposition === "Outros" && (
            <Field.Root flex="1" minW="0">
              <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                Insira a composição principal:
              </Field.Label>
              <Input
                value={data.otherMainComposition}
                onChange={(e) =>
                  setData({
                    ...data,
                    otherMainComposition: e.target.value.toUpperCase(),
                  })
                }
                placeholder="Insira a composição principal"
                bg="white"
                boxShadow="md"
                border="1px solid #2b4d52ff"
                _hover={{ borderColor: "#5d8288c4" }}
              />
            </Field.Root>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}
