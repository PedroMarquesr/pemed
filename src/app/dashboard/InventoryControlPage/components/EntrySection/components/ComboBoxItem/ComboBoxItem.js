"use client"

import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "@/components/libs/firebaseInit"
import { useState, useEffect } from "react"
import { Flex, Text, Combobox, Portal } from "@chakra-ui/react"

export default function ComboBoxItem({ onSelect }) {
  const [items, setItems] = useState([])
  const [selected, setSelected] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "inventoryItems"))
        const data = querySnapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }))
        setItems(data)
      } catch {
        alert(`Erro!`)
      }
    }
    fetchItems()
  }, [])

  useEffect(
    (item) => {
      const entryItem = async () => {
        setSelected(item)
      }
    },
    [selected]
  )

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "inventoryItems"))
  //       const items = querySnapshot.docs.map((doc) => ({
  //         brandName: doc.brandName,
  //         ...doc.data(),
  //       }))
  //       setItems(items)
  //     } catch (error) {
  //       console.log("Erro ao buscar itens")
  //     }
  //   }
  //   fetchItems()
  // }, [])

  return (
    <>
      <Combobox.Root>
        <Combobox.Label>Selecione o item </Combobox.Label>
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
              <Combobox.Empty>Item não encontrado</Combobox.Empty>
              {items.map((item) => (
                <Combobox.Item item={item.brandName} key={item.id}>
                  {item.brandName}
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </>
  )
}
