"use client";
import { Flex, Text, Box } from "@chakra-ui/react";
import InputEntry from "../components/InputEntry/InputEntry";
import TransactionItemTitle from "../components/TransactionItemTitle/TransactionItemTitle";
import { FaPlus } from "react-icons/fa6";

import ComboBoxItem from "../components/ComboBoxItem/ComboBoxItem";

export default function EntrySection() {
  return (
    <>
      <Flex
        bg="white"
        borderRadius="md"
        my={5}
        w="100%"
        boxShadow="xl"
        flexDirection={"column"}
      >
        <Flex>
          <TransactionItemTitle
            icon={<FaPlus />}
            iconColor={"#4da071"}
            title={"Registrar Entrada"}
            subTitle={"Registre a entrada de item no estoque"}
          />{" "}
        </Flex>
        <Flex alignItems={"stretch"}>
          <Flex flexDirection={"column"} flex={"1"}>
            <ComboBoxItem flex={"1"} />
            <InputEntry
              labelName={"Lote"}
              placeholder={"Insira o lote do item"}
            />
            <InputEntry labelName={"Fornecedor"} />
            <InputEntry labelName={"Custo Unitário"} inputType={"number"} />
          </Flex>
          <Flex flexDirection={"column"} flex={"1"}>
            <InputEntry
              labelName={"Quantidade:"}
              placeholder={"Insira a quantidade"}
              inputType={"number"}
              width={"50%"}
            />
            <InputEntry
              labelName={"Data de validade"}
              placeholder={"Insira o lote do item"}
              inputType={"date"}
              width={"50%"}
            />
            <InputEntry
              labelName={"Nº NFE"}
              placeholder={"Insira o número da NFE"}
              inputType={"Text"}
              width={"50%"}
            />

            <InputEntry
              labelName={"Nº NFE"}
              placeholder={"Insira o número da NFE"}
              inputType={"number"}
              display={"none"}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
