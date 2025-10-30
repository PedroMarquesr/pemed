"use client"
import { Flex, Text, Box } from "@chakra-ui/react"

import InputEntry from "../components/InputEntry/InputEntry"
import TransactionItemTitle from "../components/TransactionItemTitle/TransactionItemTitle"
import UpdateButton from "../components/UpdateButton/UpdateButton"
import ComboBoxItem from "../components/ComboBoxItem/ComboBoxItem"

import { FaPlus } from "react-icons/fa6"

import { collection, addDoc } from "firebase/firestore"
import { db } from "@/components/libs/firebaseInit"

import { useState } from "react"

export default function EntrySection() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [entryData, setEntryData] = useState({
    batch: "",
    supplier: "",
    unitCost: "",
    quantity: "",
    expirationDate: "",
    invoiceNumber: "",
  })
  const handleSelectItem = (item) => {
    console.log("🎯 Item recebido do ComboBox:", item)
    console.log("🎯 ID do item:", item?.id)
    console.log("🎯 Label do item:", item?.label)
    setSelectedItem(item)
  }

  const handleSave = async () => {
    console.log("🔍 DEBUG - selectedItem:", selectedItem)
    console.log("🔍 DEBUG - entryData:", entryData)

    // 1 - Validação inicial
    if (!selectedItem) {
      alert("Selecione um item antes de salvar.")
      return
    }

    // 2 - Validação de campos obrigatórios
    if (!entryData.batch || !entryData.quantity || !entryData.unitCost) {
      alert("Lote, quantidade e custo unitário são obrigatórios.") // ✅ Corrigido
      return
    }

    try {
      // 3 - Preparação dos dados
      const batchData = {
        itemId: selectedItem.id,
        itemName: selectedItem.name || selectedItem.label,
        batch: entryData.batch.trim(),
        supplier: entryData.supplier.trim(),
        unitCost: parseFloat(entryData.unitCost),
        quantity: parseInt(entryData.quantity),
        currentQuantity: parseInt(entryData.quantity),
        expirationDate: entryData.expirationDate,
        invoiceNumber: entryData.invoiceNumber.trim(),
        entryDate: new Date().toISOString(),
        status: "active",
      }

      console.log("🔥 Enviando para Firebase:", batchData)

      // 4 - Comunicação com o banco
      await addDoc(collection(db, "inventoryBatches"), batchData)

      // 5 - Feedback de sucesso
      console.log("✅ Entrada registrada com sucesso!", batchData)

      // 6 - Limpeza do formulário
      setEntryData({
        batch: "",
        supplier: "",
        unitCost: "",
        quantity: "",
        expirationDate: "",
        invoiceNumber: "",
      })
      setSelectedItem(null)
      window.location.reload()

      alert("Entrada registrada com sucesso!")
    } catch (error) {
      // 7 - Tratamento de erros
      console.error("❌ Erro ao registrar entrada:", error)
      alert("Erro ao salvar os dados. Tente novamente.")
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
            onSelect={handleSelectItem}
          />
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

      <UpdateButton onClick={handleSave} />

      {selectedItem && (
        <Box>
          <Text>
            Item selecionado: {selectedItem?.label || selectedItem?.name}{" "}
          </Text>
          <Text> Lote: {entryData.batch} </Text>
          <Text> Fornecedor: {entryData.supplier} </Text>
          <Text> Custo Unitário: {entryData.unitCost} </Text>
          <Text> Quantidade adicionada: {entryData.quantity} </Text>
          <Text> Data de validade: {entryData.expirationDate} </Text>
          <Text> Nota fiscal: {entryData.invoiceNumber}</Text>
        </Box>
      )}
    </Flex>
  )
}
