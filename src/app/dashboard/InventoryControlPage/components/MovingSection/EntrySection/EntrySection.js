"use client";
import { Flex, Button, Text } from "@chakra-ui/react";
import InputEntry from "../components/InputEntry/InputEntry";
import TransactionItemTitle from "../components/TransactionItemTitle/TransactionItemTitle";
import ComboBoxItem from "../components/ComboBoxItem/ComboBoxItem";
import { useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { db } from "@/components/libs/firebaseInit";
import { FaPlus } from "react-icons/fa6";

export default function EntrySection() {
  const [displayName, setDisplayName] = useState("");
  const [updateData, setUpdateData] = useState({
    batchNumber: "",
    expirationDate: "",
    quantity: 0,
    purchasePrice: 0,
    purchaseDate: "",
    invoiceNumber: "",
    supplier: "",
  });

  const handleChange = async () => {
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
        alert("Item não encontrado!");
        return;
      }

      // Pego o primeiro doc que encontrar
      const docFound = querySnapshot.docs[0];
      const docRef = doc(db, "inventoryItems", docFound.id);

      // : Usar getDoc em vez de getDocs
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        alert("Documento não encontrado!");
        return;
      }

      const docData = docSnap.data();

      // Acessar os dados corretamente
      const currentTotal = Number(docData?.quantity?.totalQuantity || 0);
      const newQuantity = Number(updateData.quantity);
      const newTotal = currentTotal + newQuantity;

      console.log("🔢 Cálculo do estoque:", {
        currentTotal,
        newQuantity,
        newTotal,
      });

      //  Atualizar o documento
      await updateDoc(docRef, {
        batches: arrayUnion({
          ...updateData,
          quantity: newQuantity,
          purchasePrice: Number(updateData.purchasePrice) || 0,
          createdAt: new Date().toISOString(),
        }),
        quantity: {
          totalQuantity: newTotal,
          lastUpdated: new Date().toISOString(),
        },
      });
      window.location.reload();

      alert("Entrada registrada com sucesso !!");
    } catch (error) {
      console.error("❌ Erro ao registrar entrada:", error);
      alert("Erro ao registrar entrada: " + error.message);
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
            onSelect={(item) => setDisplayName(item?.label)}
          />

          <InputEntry
            labelName={"Lote *"}
            placeholder={"Digite o lote"}
            inputType={"text"}
            setData={(e) =>
              setUpdateData({
                ...updateData,
                batchNumber: e.target.value,
              })
            }
          />
          <InputEntry
            labelName={"Fornecedor *"}
            placeholder={"Digite o fornecedor"}
            inputType={"text"}
            setData={(e) =>
              setUpdateData({
                ...updateData,
                supplier: e.target.value,
              })
            }
          />
          <InputEntry
            labelName={"Custo Unitário *"}
            placeholder={"Digite o custo unitário"}
            inputType={"number"}
            setData={(e) =>
              setUpdateData({
                ...updateData,
                purchasePrice: parseFloat(e.target.value) || 0,
                purchaseDate: new Date().toISOString().split("T")[0],
              })
            }
          />
        </Flex>
        <Flex flexDirection={"column"} flex={"1"}>
          <InputEntry
            labelName={"Quantidade *"}
            placeholder={"Digite a quantidade"}
            inputType={"number"}
            setData={(e) =>
              setUpdateData({
                ...updateData,
                quantity: parseInt(e.target.value) || 0,
              })
            }
          />
          <InputEntry
            labelName={"Data de validade *"}
            placeholder={"Digite a data de validade"}
            inputType={"date"}
            setData={(e) =>
              setUpdateData({
                ...updateData,
                expirationDate: e.target.value,
              })
            }
          />
          <InputEntry
            labelName={"N° NFE *"}
            placeholder={"Digite o número da NFE"}
            inputType={"text"}
            setData={(e) =>
              setUpdateData({
                ...updateData,
                invoiceNumber: e.target.value,
              })
            }
          />
        </Flex>
      </Flex>

      <Flex textAlign={"center"} justifyContent={"center"} mb={9}>
        <Button
          p={"6"}
          mr={"2"}
          width={"15%"}
          bg={"#181818"}
          variant="outline"
          size="sm"
          fontWeight={"semibold"}
          fontSize={"md"}
          boxShadow={"md"}
          disabled={
            !updateData.batchNumber ||
            !updateData.quantity ||
            !updateData.expirationDate ||
            !updateData.purchasePrice ||
            !updateData.invoiceNumber ||
            !updateData.supplier
          }
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

      {/* Debug */}
      <Flex p={2} bg="gray.50" borderRadius="md" flexDirection="column" mt={2}>
        <Text fontWeight="bold">Debug:</Text>
        <Text>Item selecionado: {displayName}</Text>
        <Text>Quantidade a adicionar: {updateData.quantity}</Text>
      </Flex>
    </Flex>
  );
}
