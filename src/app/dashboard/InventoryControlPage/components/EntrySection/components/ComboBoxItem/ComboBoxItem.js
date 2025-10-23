"use client"

import { collection as firestoreCollection, getDocs } from "firebase/firestore"

import { db } from "@/components/libs/firebaseInit"
import { useState, useEffect } from "react"
import {
  Flex,
  Text,
  Combobox,
  Portal,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"

export default function ComboBoxItem() {
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
          firestoreCollection(db, "inventoryItems")
        )
        const data = querySnapshot.docs.map((doc) => {
          const d = doc.data()
          return {
            id: doc.id,
            label: d.displayName,
            value: d.brandName,
            ...d,
          }
        })
        set(data)
      } catch (error) {
        console.error("Erro ao buscar itens do Firestore:", error)
        alert(`Erro ao buscar itens: ${error.message}`)
      }
    }

    fetchItems()
  }, [set])

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      width="320px"
    >
      <Combobox.Label>Insira o item:</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Digite para filtrar" />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>

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
