"use client"
import { Flex } from "@chakra-ui/react"

import InputEntry from "../components/InputEntry/InputEntry"
import TransactionItemTitle from "../components/TransactionItemTitle/TransactionItemTitle"
import UpdateButton from "../components/UpdateButton/UpdateButton"
import ComboBoxItem from "../components/ComboBoxItem/ComboBoxItem"

import { useState, useEffect } from "react"

import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore"
import { db } from "@/components/libs/firebaseInit"

//ICON
import { FaPlus } from "react-icons/fa6"

export default function EntrySectionTest() {
  const [displayName, setDisplayName] = useState("")
  const [updateData, setUpDateData] = useState({
    lote: "",
    fornecedor: "",
    custoUnitario: 0,
    quantidade: 0,
    dataValidade: "",
    nfe: "",
  })

  const handleUpDateDoc = async () => {
    // vou buscar o item pelo nome (displayName)
    try {
      const q = query(
        collection(db, "iventoryItems"),
        where("displayName", "==", displayName)
      )
      const querySnapshot = await getDocs(q)
      if (querySnapchot.empty) {
        alert("Item não encontrado!")
        return
      }
      // Vou pegar o primeiro doc que encontrar
      const docFound = querySnapshot.docs[0]
      const docRef = doc(db, "iventoryItems", docFound.id)

      // Atualizo o documento com os novos dados
      await updateDoc(docRef, udpdateData)
      alert("Documento atualizado com sucesso!")
    } catch (error) {
      alert("Erro ao atualizado o documento:", error)
    }
  }

  return (
    <Flex
      bg="white"
      borderRadius="md"
      my={5}
      w="100%"
      boxShadow="xl"
      flexDirection={"column"}
    >
      <TransactionItemTitle
        icon={<FaPlus />}
        iconColor={"#4da071"}
        title={"Registrar Entrada"}
        subTitle={"Registre a entrada de item no estoque"}
      />

      <Flex alignItems={"stretch"}>
        <Flex flexDirection={"column"} flex={"1"}>
          <InputEntry labelName={"Selecione o item"} hand />
          <InputEntry labelName={"Lote"} />
          <InputEntry labelName={"Fornecedor"} />
          <InputEntry labelName={"Custo Unitário"} />
        </Flex>
        <Flex flexDirection={"column"} flex={"1"}>
          <InputEntry labelName={"Quantidade"} />
          <InputEntry labelName={"Data de validade"} />
          <InputEntry labelName={"N° NFE"} />
          <InputEntry labelName={"Custo Unitário"} display={"none"} />
        </Flex>
      </Flex>
      {JSON.stringify(updateData)}
    </Flex>
  )
}
