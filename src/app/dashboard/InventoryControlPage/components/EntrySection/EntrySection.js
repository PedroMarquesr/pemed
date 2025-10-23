"use client"
import { Flex } from "@chakra-ui/react"
import InputEntry from "./components/InputEntry/InputEntry"

import ComboBoxItem from "./components/ComboBoxItem/ComboBoxItem"

export default function EntrySection() {
  return (
    <>
      <Flex bg="white" borderRadius="md" my={5} w="100%" boxShadow="xl">
        {" "}
        <Flex flexDirection={"column"} flex={"1"}>
          <InputEntry labelName={"Item:"} placeholder={"Insira o item"} />
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
          />
          <InputEntry
            labelName={"Data de validade"}
            placeholder={"Insira o lote do item"}
            inputType={"date"}
          />
          <InputEntry
            labelName={"Nº NFE"}
            placeholder={"Insira o número da NFE"}
            inputType={"number"}
          />

          <Flex flex="1">
            <ComboBoxItem />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
