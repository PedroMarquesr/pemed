"use client";

import { collection as firestoreCollection, getDocs } from "firebase/firestore";
import { db } from "@/components/libs/firebaseInit";
import { useEffect } from "react";
import {
  Box,
  Combobox,
  Portal,
  Flex,
  useFilter,
  useListCollection,
  Field,
} from "@chakra-ui/react";

export default function ComboboxForFetch({
  placeholder,
  collectionName,
  labelForList,
  onSelectItem,
  labelName,
}) {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter, set } = useListCollection({
    initialItems: [],
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
    filter: contains,
  });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(
          firestoreCollection(db, collectionName)
        );
        const data = querySnapshot.docs.map((doc) => {
          const d = doc.data();
          return {
            id: doc.id,
            label: d[labelForList],
            value: doc.id,
            ...d,
          };
        });
        set(data);
      } catch (error) {
        console.error("Erro ao buscar itens do Firestore:", error);
      }
    };

    fetchItems();
  }, [collectionName, labelForList, set]);

  return (
    <>
      <Field.Root w={"25%"}>
        <Field.Label fontSize="sm" fontWeight="bold" color="gray.700" mb={1}>
          {labelName}
        </Field.Label>
        <Combobox.Root
          collection={collection}
          borderRadius="md"
          onInputValueChange={(e) => filter(e.inputValue)}
          width="100%"
        >
          <Combobox.Control
            display="flex"
            alignItems="center"
            borderRadius="md"
            _hover={{ borderColor: "#5d8288c4" }}
            border="1px solid #2b4d52ff"
            boxShadow="md"
            bg="white"
            px="3"
            mb={5}
            height="auto"
          >
            <Box width={"100%"}>
              <Combobox.Input
                width="100%"
                placeholder={placeholder}
                bg="white"
                border={"none"}
                height="100%"
              />
            </Box>
            <Box>
              <Combobox.IndicatorGroup>
                <Combobox.ClearTrigger />
                <Combobox.Trigger />
              </Combobox.IndicatorGroup>
            </Box>
          </Combobox.Control>
          <Portal>
            <Combobox.Positioner>
              <Combobox.Content>
                <Combobox.Empty>Item não encontrado</Combobox.Empty>

                {collection.items.map((item) => (
                  <Combobox.Item
                    item={item}
                    key={item.id}
                    onClick={() => onSelectItem && onSelectItem(item)}
                  >
                    {item.label}
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                ))}
              </Combobox.Content>
            </Combobox.Positioner>
          </Portal>
        </Combobox.Root>
      </Field.Root>
    </>
  );
}
