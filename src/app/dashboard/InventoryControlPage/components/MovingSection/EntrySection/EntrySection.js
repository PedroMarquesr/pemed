"use client"
import { Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import InputEntry from "../components/InputEntry/InputEntry"
import TransactionItemTitle from "../components/TransactionItemTitle/TransactionItemTitle"
import SaveButton from "@/app/dashboard/components/SaveButton/SaveButton"
import { FaPlus } from "react-icons/fa6"
import ComboBoxItem from "../components/ComboBoxItem/ComboBoxItem"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/components/libs/firebaseInit"

export default function EntrySection() {
  const [selectedItem, setSelectedItem] = useState(null) // item selecionado
  const [entryData, setEntryData] = useState({
    batch: "",
    supplier: "",
    unitCost: "",
    quantity: "",
    expirationDate: "",
    invoiceNumber: "",
  })

  const handleSave = async () => {
    // 1 - Validação inicial - Verifica se há item selecionado.
    if (!selectedItem) {
      alert("Selecione um item antes de salvar.")
      return // Para a execução
    }
    // 2 - Validação de campos obrigatórios
    if (!entryData.batch || !entryData.quantity || !entryData.unitCost) {
      alert("Lote, quantidade e custo unitário são obrigatoirios.")
      return
    }
    // 3 - TRY-CATCH - Tratamento de erros
    try {
      // 4 Preparação dos dados - Formata para o firebase

      const batchData = {
        itemId: selectedItem.id, // ID do item pai
        itemName: selectedItem.name || selectedItem.label, // Nome para facilitar consultas
        batch: entryData.batch.trim(), // Remove espaços desnecessários
        supplier: entryData.supplier.trim(),
        unitCost: parseFloat(entryData.unitCost), // Converte para número
        quantity: parseInt(entryData.quantity), // Converte para número inteiro
        currentQuantity: parseInt(entryData.quantity), // Estoque inicial
        expirationDate: entryData.expirationDate,
        invoiceNumber: entryData.invoiceNumber.trim(),
        entryDate: new Date().toISOString(), // Data/hora no formato ISO
        status: "active", // Controle de estado
      }
      // 5 Comunicação com o banco
      await addDoc(collection(db, "inventoryBatches"), batchData)
      // 6 FEEDBACK de sucesso
      console.log("Entrada registrada com sucesso!", batchData)
      // 7 Limpeza do form
      setEntryData({
        batch: "",
        supplier: "",
        unitCost: "",
        quantity: "",
        expirationDate: "",
        invoiceNumber: "",
      })
      setSelectedItem(null) // Reseta a seleção também
      alert("Entrada registrada com sucesso!")
    } catch (error) {
      // 8 - Tratamento de erros
      console.error("Erro ao registrar a entrada:", error)
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
          <ComboBoxItem
            placeholder="Selecione o item"
            onSelect={setSelectedItem}
          />{" "}
          <InputEntry
            labelName={"Lote"}
            placeholder={"Insira o lote do item"}
            value={entryData.batch}
            setData={(e) =>
              setEntryData({ ...entryData, batch: e.target.value })
            }
          />
          <InputEntry
            labelName={"Fornecedor"}
            value={entryData.supplier}
            setData={(e) =>
              setEntryData({ ...entryData, supplier: e.target.value })
            }
          />
          <InputEntry
            labelName={"Custo Unitário"}
            inputType={"number"}
            value={entryData.unitCost}
            setData={(e) =>
              setEntryData({ ...entryData, unitCost: e.target.value })
            }
          />
        </Flex>

        <Flex flexDirection={"column"} flex={"1"}>
          <InputEntry
            labelName={"Quantidade:"}
            inputType={"number"}
            value={entryData.quantity}
            setData={(e) =>
              setEntryData({ ...entryData, quantity: e.target.value })
            }
          />
          <InputEntry
            labelName={"Data de validade"}
            inputType={"date"}
            value={entryData.expirationDate}
            setData={(e) =>
              setEntryData({ ...entryData, expirationDate: e.target.value })
            }
          />
          <InputEntry
            labelName={"Nº NFE"}
            inputType={"text"}
            value={entryData.invoiceNumber}
            setData={(e) =>
              setEntryData({ ...entryData, invoiceNumber: e.target.value })
            }
          />
        </Flex>
      </Flex>

      <SaveButton onClick={handleSave}>
        <Text>Salvar Entrada</Text>
      </SaveButton>
      {selectedItem && (
        <Text mt={2} p={2} bg="gray.50" borderRadius="md">
          Item selecionado:{" "}
          {selectedItem.name ||
            selectedItem.label ||
            JSON.stringify(selectedItem)}
        </Text>
      )}

      {entryData.batch && (
        <Text mt={2} p={2} bg="gray.50" borderRadius="md">
          {" "}
          {entryData.batch}{" "}
        </Text>
      )}
    </Flex>
  )
}
