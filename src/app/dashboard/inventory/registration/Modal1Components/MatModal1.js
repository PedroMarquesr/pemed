"use client";

import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import ContainerForm from "../components/ContainerForm/ContainerForm";
import InputForRegistrer from "../components/InputForRegistrer/InputForRegistrer";
import ComboboxForFetch from "../components/ComboboxForFetch/ComboboxForFetch";
import SwitchRegister from "../components/SwitchRegister/SwitchRegister";

export default function MatModal1({ data, setData }) {
  const handleBrandNameChange = (e) => {
    setData({
      ...data,
      hasBrandName: true,
      brandName: e.target.value.toUpperCase(),
    });
  };

  return (
    <Flex w="100%">
      <Box flex="1" borderRadius="md">
        <ContainerForm>
          <SwitchRegister
            label="Contém nome comercial?"
            checked={data.hasBrandName}
            onCheckedChange={(e) =>
              setData({ ...data, hasBrandName: e.checked })
            }
          />
        </ContainerForm>

        {data.hasBrandName && (
          <ContainerForm>
            <InputForRegistrer
              label="Nome comercial:"
              value={data.brandName}
              onChange={handleBrandNameChange}
            />
          </ContainerForm>
        )}
        <ContainerForm>
          <InputForRegistrer
            label="Nome técnico:"
            value={data.technicalName}
            onChange={(e) =>
              setData({
                ...data,
                technicalName: e.target.value.toUpperCase(),
              })
            }
            placeholder="Ex: seringa descartável, cateter venoso, luva de procedimento"
          />
        </ContainerForm>

        <ContainerForm>
          <ComboboxForFetch
            labelName="Fabricante:"
            collectionName="suppliers"
            labelForList="tradeName"
            placeholder="Selecione o fabricante"
            onSelectItem={(item) => {
              setData({ ...data, manufacturer: item.label });
            }}
          />
        </ContainerForm>
      </Box>
    </Flex>
  );
}
