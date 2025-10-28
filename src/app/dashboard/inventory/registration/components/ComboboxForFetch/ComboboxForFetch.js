"use client"

import { collection as firestoreCollection, getDocs } from "firebase/firestore"

import { db } from "@/components/libs/firebaseInit"
import { useState, useEffect } from "react"
import {
  Box,
  Combobox,
  Portal,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"

export default function ComboBoxItem({
  placeholder,
  collectionName,
  labelForList,
}) {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter, set } = useListCollection({
    initialItems: [],
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
    filter: contains,
  })
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(
          firestoreCollection(db, collectionName)
        )

        const data = querySnapshot.docs.map((doc) => {
          const d = doc.data()
          return {
            id: doc.id,
            label: d[labelForList],
            value: d.id,
            ...d,
          }
        })
        set(data)
      } catch (error) {
        console.error("Erro ao buscar itens do Firestore:", error)
      }
    }

    fetchItems()
  }, [set])

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      width="100%"
      flex="1"
      p="10"
    >
      <Combobox.Label fontSize="sm" fontWeight="bold" color="gray.700">
        Insira o item:
      </Combobox.Label>
      <Combobox.Control
        display="flex"
        alignItems="center"
        _hover={{ borderColor: "#5d8288c4" }}
        border="1px solid #2b4d52ff"
        boxShadow="md"
      >
        <Box width={"100%"}>
          <Combobox.Input
            width="90%"
            placeholder={placeholder}
            bg="white"
            border={"none"}
          />
        </Box>
        <Box>
          <Combobox.IndicatorGroup>
            <Combobox.ClearTrigger />
            <Combobox.Trigger />
          </Combobox.IndicatorGroup>
        </Box>
      </Combobox.Control>
      <Portal p={"80%"}>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>Item não encontrado</Combobox.Empty>

            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.id}>
                {item.label}
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}
