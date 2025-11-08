"use client";
import React, { useState } from "react";
import { Flex, Text, Field, NativeSelect } from "@chakra-ui/react";
import { LuPill } from "react-icons/lu";
import MedModal1 from "./Modal1Components/MedModal1";
import MatModal1 from "./Modal1Components/MatModal1";
import ContainerForm from "./components/ContainerForm/ContainerForm";
import SelectForRegistrer from "./components/SelectForRegistrer/SelectForRegistrer";
import TransactionItemTitle from "../../InventoryControlPage/components/MovingSection/components/TransactionItemTitle/TransactionItemTitle";
import ExibitionCodeItem from "../../InventoryControlPage/components/ExibitionCodeItem/ExibitionCodeItem";

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
      <Flex
        alignItems="center"
        gap={2}
        justifyContent={"space-between"}
        border={"1px solid red"}
      >
        <TransactionItemTitle
          icon={<LuPill />}
          iconColor={"rgb(23,95,254)"}
          title={"Identificação básica"}
        />

        <ExibitionCodeItem data={data} />
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
          mb={"5"}
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
