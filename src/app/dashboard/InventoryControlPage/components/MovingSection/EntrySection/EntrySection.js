"use client";
import {
  Flex,
  Button,
  Text,
  Dialog,
  CloseButton,
  Box,
  Portal,
} from "@chakra-ui/react";

import InputEntry from "../components/InputEntry/InputEntry";
import TransactionItemTitle from "../components/TransactionItemTitle/TransactionItemTitle";
import ComboBoxItem from "../components/ComboBoxItem/ComboBoxItem";
import AlertDefault from "@/components/AlertDefault/AlertDefault";

import { useInventoryItems } from "@/hooks/useInventoryItems";
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
  increment,
} from "firebase/firestore";
import { db } from "@/components/libs/firebaseInit";
import { FaPlus } from "react-icons/fa6";

export default function EntrySection() {
  const [showSucessAlert, setShowSucessAlert] = useState(false);
  const { items, loading, error } = useInventoryItems();
  const [selectedItem, setSelectedItem] = useState(null);
  const [updateData, setUpdateData] = useState({
    batchNumber: "",
    expirationDate: "",
    quantity: 0,
    purchasePrice: 0,
    purchaseDate: "",
    invoiceNumber: "",
    supplier: "",
  });

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const handleChange = async () => {
    try {
      const q = query(
        collection(db, "inventoryItems"),
        where("displayName", "==", selectedItem.label)
      );

      const querySnapshot = await getDocs(q);

      const docFound = querySnapshot.docs[0];
      const docRef = doc(db, "inventoryItems", docFound.id);
      const docSnap = await getDoc(docRef);

      const docData = docSnap.data();
      const currentTotal = Number(docData?.quantity?.totalQuantity || 0);
      const newQuantity = Number(updateData.quantity);

      await updateDoc(docRef, {
        batches: arrayUnion({
          ...updateData,
          quantity: newQuantity,
          purchasePrice: Number(updateData.purchasePrice) || 0,
          createdAt: new Date().toISOString(),
        }),

        "quantity.totalQuantity": increment(newQuantity),
        "quantity.lastUpdated": new Date().toISOString(),
      });

      setShowSucessAlert(true);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      alert("Erro ao registrar entrada: " + error.message);
    }
  };

  if (loading) return <Text>Carregando itens...</Text>;
  if (error) return <Text>Erro ao carregar itens: {error.message}</Text>;

  const checkRequiredFields = () => {
    return (
      !selectedItem ||
      !updateData.batchNumber ||
      !updateData.expirationDate ||
      !updateData.invoiceNumber ||
      !updateData.supplier ||
      !updateData.quantity ||
      updateData.quantity <= 0 ||
      !updateData.purchasePrice ||
      updateData.purchasePrice <= 0
    );
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
      <Flex justifyContent={"space-between"}>
        <TransactionItemTitle
          icon={<FaPlus />}
          iconColor={"#4da071"}
          title={"Registrar Entrada"}
          subTitle={"Registre a entrada de item no estoque"}
        />
        <Portal>
          <Box
            position="fixed"
            top="4"
            left="50%"
            transform="translateX(-50%)"
            zIndex="modal"
            width="auto"
          >
            {showSucessAlert && (
              <AlertDefault
                alertTitle={"Entrada registrada com sucesso!"}
                alertInfo={"success"}
                width="400px"
                onClose={() => setShowSucessAlert(false)}
              />
            )}
          </Box>
        </Portal>
      </Flex>
      <Flex alignItems={"stretch"}>
        <Flex flexDirection={"column"} flex={"1"}>
          <ComboBoxItem
            placeholder="Selecione o item"
            listItems={items}
            onSelect={handleItemSelect}
          />

          <InputEntry
            labelName={"Lote *"}
            placeholder={"Digite o lote"}
            inputType={"text"}
            value={updateData.batchNumber}
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
            value={updateData.supplier}
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
            value={updateData.purchasePrice}
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
            value={updateData.quantity}
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
            value={updateData.expirationDate}
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
            value={updateData.invoiceNumber}
            setData={(e) =>
              setUpdateData({
                ...updateData,
                invoiceNumber: e.target.value,
              })
            }
          />
          <InputEntry display={"none"} />
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
          disabled={checkRequiredFields()}
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
    </Flex>
  );
}
