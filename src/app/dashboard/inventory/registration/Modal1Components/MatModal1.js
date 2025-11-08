"use client";

import React, { useState } from "react";
import { Box, Flex, Input, Field, Switch } from "@chakra-ui/react";

import ContainerForm from "../components/ContainerForm/ContainerForm";
import InputForRegistrer from "../components/InputForRegistrer/InputForRegistrer";
import SwitchRegister from "../components/SwitchRegister/SwitchRegister";

export default function MatModal1({ data, setData }) {
  return (
    <Flex w={"100%"}>
      <Box flex="1" borderRadius="md">
        <SwitchRegister
          label={"Contém nome comercial?"}
          checked={data.hasBrandName}
          onCheckedChange={(e) => setData({ ...data, hasBrandName: e.checked })}
        />

        {data.hasBrandName && (
          <ContainerForm>
            <InputForRegistrer
              label={`Nome Comercial:`}
              value={data.brandName}
              onChange={(e) =>
                setData({ ...data, brandName: e.target.value.toUpperCase() })
              }
              mr={"5px"}
            />
          </ContainerForm>
        )}

        <ContainerForm>
          <InputForRegistrer
            label={`Nome técnico:`}
            value={data.technicalName}
            onChange={(e) =>
              setData({
                ...data,
                technicalName: e.target.value.toUpperCase(),
              })
            }
            mr={"5px"}
            placeholder={
              "Ex: seringa descartável, cateter venoso, luva de procedimento"
            }
          />
        </ContainerForm>

        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700" mb={2}>
            Fabricante:
          </Field.Label>
          <Input
            value={data.manufacturer}
            onChange={(e) =>
              setData({ ...data, manufacturer: e.target.value.toUpperCase() })
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
    </Flex>
  );
}
