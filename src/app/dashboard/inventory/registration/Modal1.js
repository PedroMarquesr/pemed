"use client";
import React, { useState } from "react";
import { Flex, Text, Field, NativeSelect } from "@chakra-ui/react";
import { LuPill } from "react-icons/lu";
import MedModal1 from "./Modal1Components/MedModal1";
import MatModal1 from "./Modal1Components/MatModal1";
import ContainerForm from "./components/ContainerForm/ContainerForm";
import SelectForRegistrer from "./components/SelectForRegistrer/SelectForRegistrer";

export default function Modal1({
  selectOption,
  setSelectOption,
  data,
  setData,
}) {
  const renderSelectedScreen = () => {
    switch (selectOption) {
      case "Medicamento":
        return <MedModal1 data={data} setData={setData} />;
      case "Material":
        return <MatModal1 data={data} setData={setData} />;

      default:
        return null;
    }
  };
  let codItem = data.idItemForUser;

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
      <Flex
        flexDirection={"column"}
        flex="1"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={2}>
          Código do item
        </Text>
        <Text
          textAlign={"center"}
          border={"2px solid #0c142e"}
          p={"4px"}
          width="10vw"
          boxShadow={"md"}
          borderRadius="md"
        >
          {codItem}
        </Text>
      </Flex>
      <ContainerForm mr={"50px"}>
        <SelectForRegistrer
          label={"Tipo de Item"}
          value={data.itemType}
          onChange={(e) => {
            const value = e.target.value;
            setData({ ...data, itemType: e.target.value });
            setSelectOption(value);
          }}
        >
          <option value="">Selecione</option>
          <option value="Medicamento">Medicamento</option>
          <option value="Material">Material</option>
        </SelectForRegistrer>
      </ContainerForm>

      {renderSelectedScreen()}
    </Flex>
  );
}
