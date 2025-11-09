"use client";
import React from "react";
import { useEffect } from "react";
import {
  Flex,
  Input,
  Text,
  Field,
  Switch,
  Image,
  Box,
  Popover,
  Portal,
} from "@chakra-ui/react";
import { LuPill } from "react-icons/lu";
import { anvisaCodeRequired } from "@/app/dashboard/inventory/registration/utils/constants.js";
import { BsFillInfoCircleFill } from "react-icons/bs";

import TransactionItemTitle from "@/app/dashboard/InventoryControlPage/components/MovingSection/components/TransactionItemTitle/TransactionItemTitle";
import ExibitionCodeItem from "@/app/dashboard/InventoryControlPage/components/ExibitionCodeItem/ExibitionCodeItem";
import ContainerForm from "../components/ContainerForm/ContainerForm";
import InputForRegistrer from "../components/InputForRegistrer/InputForRegistrer";

export default function MedModal2({ data, setData }) {
  const isRequired = anvisaCodeRequired.includes(data.regulatoryCategory);

  useEffect(() => {
    if (isRequired && !data.hasAnvisaRegistration) {
      setData((prev) => ({
        ...prev,
        hasAnvisaRegistration: true,
        hasSimplifiedNotification: false,
      }));
    }
  }, [isRequired, data.hasAnvisaRegistration]);

  return (
    <Flex
      flexDirection="column"
      bg="white"
      borderRadius="md"
      my={5}
      w="100%"
      boxShadow="xl"
    >
      <Flex alignItems="center" gap={2} justifyContent={"space-between"}>
        <TransactionItemTitle
          icon={<LuPill />}
          iconColor={"rgb(23,95,254)"}
          title={"Classificação"}
        />
        <ExibitionCodeItem data={data} />
      </Flex>

      {!isRequired && (
        <ContainerForm>
          <Field.Root>
            <Flex alignItems="center" gap={4}>
              <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                Notificação simplificada
              </Field.Label>
              <Switch.Root
                checked={data.hasSimplifiedNotification}
                onCheckedChange={(e) =>
                  setData({
                    ...data,
                    hasSimplifiedNotification: e.checked,
                    hasAnvisaRegistration: !e.checked,
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
        </ContainerForm>
      )}

      {!isRequired && data.hasSimplifiedNotification && (
        <ContainerForm>
          <InputForRegistrer
            label="Referência normativa (RDC aplicável)"
            value={data.simplifiedNotificationReference}
            onChange={(e) =>
              setData({
                ...data,
                simplifiedNotificationReference: e.target.value.toUpperCase(),
              })
            }
            placeholder="RDC xx/xxxx"
          />
        </ContainerForm>
      )}

      {(isRequired || !data.hasSimplifiedNotification) && (
        <>
          <ContainerForm>
            <InputForRegistrer
              label="Registro ANVISA"
              value={data.anvisaRegistrationCode}
              onChange={(e) =>
                setData({ ...data, anvisaRegistrationCode: e.target.value })
              }
              placeholder="Digite o registro"
              maxLength={13}
              disabled={isRequired ? false : data.hasSimplifiedNotification}
            />
            <InputForRegistrer
              label="Validade do Registro"
              value={data.registrationValidity}
              onChange={(e) =>
                setData({
                  ...data,
                  registrationValidity: e.target.value.toUpperCase(),
                })
              }
              type="date"
              disabled={isRequired ? false : data.hasSimplifiedNotification}
            />
          </ContainerForm>

          <ContainerForm>
            <Field.Root w="25%">
              <Flex alignItems="center">
                <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                  Apresentação oficial (Anvisa)
                </Field.Label>
                <Popover.Root positioning={{ placement: "right" }}>
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
                        <Popover.Body>
                          <Image
                            src="/inventory/officialAnvisaPresentation.jpg"
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
                value={data.anvisaPresentation}
                onChange={(e) =>
                  setData({
                    ...data,
                    anvisaPresentation: e.target.value.toUpperCase(),
                  })
                }
                placeholder=""
                bg="white"
                boxShadow="md"
                border="1px solid #2b4d52ff"
                _hover={{ borderColor: "#5d8288c4" }}
                disabled={isRequired ? false : data.hasSimplifiedNotification}
              />
            </Field.Root>
          </ContainerForm>
        </>
      )}

      <ContainerForm>
        <InputForRegistrer
          label="Classe terapêutica"
          value={data.therapeuticClass}
          onChange={(e) =>
            setData({
              ...data,
              therapeuticClass: e.target.value.toUpperCase(),
            })
          }
          placeholder="Insira a classe"
        />
        <InputForRegistrer
          label="Validade total do medicamento (em meses)"
          value={data.totalDrugValidity}
          onChange={(e) =>
            setData({
              ...data,
              totalDrugValidity: e.target.value.toUpperCase(),
            })
          }
          type="number"
        />
      </ContainerForm>
    </Flex>
  );
}
