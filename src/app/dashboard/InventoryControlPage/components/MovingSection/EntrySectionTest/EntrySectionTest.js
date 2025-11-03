"use client";
import {
  Flex,
  Combobox,
  Portal,
  useFilter,
  useListCollection,
  Button,
} from "@chakra-ui/react";

import InputEntry from "../components/InputEntry/InputEntry";
import TransactionItemTitle from "../components/TransactionItemTitle/TransactionItemTitle";
import UpdateButton from "../components/UpdateButton/UpdateButton";
import ComboBoxItem from "../components/ComboBoxItem/ComboBoxItem";

import { useState, useEffect } from "react";

import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "@/components/libs/firebaseInit";

//ICON
import { FaPlus } from "react-icons/fa6";

export default function EntrySectionTest() {
  const [displayName, setDisplayName] = useState("");
  const [updateData, setUpDateData] = useState({
    batchNumber: "",
    expirationDate: "",
    quantity: 0,
    purchasePrice: 0,
    purchaseDate: "",
    invoiceNumber: "",
    supplier: "",
  });

  const handleChange = async () => {
    //validação básica

    if (!displayName) {
      alert("Por favor, selecione um item antes de continuar");
      return;
    }

    try {
      const q = query(
        collection(db, "inventoryItems"),
        where("displayName", "==", displayName)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Item não encontrado !");
      }

      //Pego o primeiro doc que encontrar

      const docFound = querySnapshot.docs[0];
      const docRef = doc(db, "inventoryItems", docFound.id);

      await updateDoc(docRef, { batches: arrayUnion(updateData) });

      alert("Entrada registrada com sucesso !!");
    } catch (error) {
      console.log(error);
    }
  };

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
          <ComboBoxItem
            placeholder={"Selecione o item"}
            onSelect={(e) => setDisplayName(e.label)}
          />

          <InputEntry
            labelName={"Lote"}
            placeholder={"Digite o lote"}
            inputType={"Text"}
            setData={(e) =>
              setUpDateData({
                ...updateData,
                batchNumber: e.target.value,
              })
            }
          />
          <InputEntry
            labelName={"Fornecedor"}
            placeholder={"Digite o fornecedor"}
            inputType={"Text"}
            setData={(e) =>
              setUpDateData({
                ...updateData,
                supplier: e.target.value,
              })
            }
          />
          <InputEntry
            labelName={"Custo Unitário"}
            placeholder={"Digite o custo unitário"}
            inputType={"Number"}
            setData={(e) =>
              setUpDateData({
                ...updateData,
                purchasePrice: e.target.value,
                purchaseDate: new Date().toISOString().split("T")[0],
              })
            }
          />
        </Flex>
        <Flex flexDirection={"column"} flex={"1"}>
          <InputEntry
            labelName={"Quantidade"}
            placeholder={"Digite a quantidade"}
            inputType={"Number"}
            setData={(e) =>
              setUpDateData({
                ...updateData,
                quantity: e.target.value,
              })
            }
          />
          <InputEntry
            labelName={"Data de validade"}
            placeholder={"Digite a data de validade"}
            inputType={"Date"}
            setData={(e) =>
              setUpDateData({
                ...updateData,
                expirationDate: e.target.value,
              })
            }
          />
          <InputEntry
            labelName={"N° NFE"}
            placeholder={"Digite o número da NFE"}
            inputType={"Text"}
            setData={(e) =>
              setUpDateData({
                ...updateData,
                invoiceNumber: e.target.value,
              })
            }
          />
          <InputEntry labelName={"Custo Unitário"} display={"none"} />
        </Flex>
      </Flex>

      <Flex textAlign={"center"} justifyContent={"center"} mb={9}>
        <Button
          p={"6"}
          mr={"2"}
          width={"10%"}
          bg={"#181818"}
          variant="outline"
          size="sm"
          fontWeight={"semibold"}
          fontSize={"md"}
          boxShadow={"md"}
          w={"15%"}
          onClick={handleChange}
          color={"white"}
          _hover={{
            color: "white",
            bg: "rgba(19,92,254,255)",
          }}
        >
          Salvar
        </Button>
      </Flex>

      {JSON.stringify(displayName)}
      {JSON.stringify(updateData)}
    </Flex>
  );
}
