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

export default function ComboBoxItem({ onSelect }) {
  const [items, setItems] = useState([])
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(
          firestoreCollection(db, "inventoryItems")
        )
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          label: doc.data().brandName,
          value: doc.data().brandName,
          ...doc.data(),
        }))
        setItems(data)
      } catch (error) {
        console.error("Erro ao buscar itens do Firestore:", error)
        alert(`Erro ao buscar itens: ${error.message}`)
      }
    }

    fetchItems()
  }, [])

  const collectionItems = items
  const { contains } = useFilter({ sensitivity: "base" })
  console.log(collectionItems)
  const { collection, filter } = useListCollection({
    initialItems: collectionItems,
    filter: contains,
  })
  console.log("Itens da const collection", collectionItems)

  console.log("Itens carregados:", items)
  // Não está dinâmico - Preciso selecionar com o mouse - totalmente diferente da pré visualisação da documentação do Chackra

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      width="320px"
    >
      <Combobox.Label>Select framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Type to search" />
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
