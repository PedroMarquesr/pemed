"use client";
import { Flex, Button, Text } from "@chakra-ui/react";
import InputEntry from "../components/InputEntry/InputEntry";
import TransactionItemTitle from "../components/TransactionItemTitle/TransactionItemTitle";
import ComboBoxItem from "../components/ComboBoxItem/ComboBoxItem";
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
} from "firebase/firestore";
import { db } from "@/components/libs/firebaseInit";
import { FaPlus } from "react-icons/fa6";

export default function EntrySection() {
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
    console.log("📦 Item selecionado no EntrySection:", item);
    setSelectedItem(item);
  };

  const handleChange = async () => {
    if (!selectedItem) {
      alert("Por favor, selecione um item antes de continuar");
      return;
    }

    try {
      const q = query(
        collection(db, "inventoryItems"),
        where("displayName", "==", selectedItem.label)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Item não encontrado!");
        return;
      }

      const docFound = querySnapshot.docs[0];
      const docRef = doc(db, "inventoryItems", docFound.id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        alert("Documento não encontrado!");
        return;
      }

      const docData = docSnap.data();
      const currentTotal = Number(docData?.quantity?.totalQuantity || 0);
      const newQuantity = Number(updateData.quantity);
      const newTotal = currentTotal + newQuantity;

      console.log("🔢 Cálculo do estoque:", {
        currentTotal,
        newQuantity,
        newTotal,
      });

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

      alert("Entrada registrada com sucesso !!");

      window.location.reload();
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
      <TransactionItemTitle
        icon={<FaPlus />}
        iconColor={"#4da071"}
        title={"Registrar Entrada"}
        subTitle={"Registre a entrada de item no estoque"}
      />

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

      {/* ✅ DEBUG PARA VERIFICAR O ESTADO */}
      <Flex p={2} bg="gray.50" borderRadius="md" flexDirection="column" mt={2}>
        <Text fontWeight="bold">Debug:</Text>
        <Text>
          Item selecionado: {selectedItem ? selectedItem.label : "Nenhum"}
        </Text>
        <Text>Botão desabilitado: {checkRequiredFields() ? "Sim" : "Não"}</Text>
        <Text>selectedItem existe: {selectedItem ? "Sim" : "Não"}</Text>
      </Flex>
    </Flex>
  );
}
