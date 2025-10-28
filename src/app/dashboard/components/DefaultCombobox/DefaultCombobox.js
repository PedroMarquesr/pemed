"use client";

import {
  Combobox,
  Portal,
  useFilter,
  useListCollection,
  Box,
} from "@chakra-ui/react";

export default function DefaultCombobox({ list, setData, comboboxLabel }) {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: list,
    filter: contains,
  })

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      onValueChange={(details) => setData(details.value)}
      width="100%"
      flex="1"
      p="10"
    >
      <Combobox.Label fontSize="sm" fontWeight="bold" color="gray.700">
        {comboboxLabel}
      </Combobox.Label>

      <Combobox.Control
        display="flex"
        alignItems="center"
        _hover={{ borderColor: "#5d8288c4" }}
        border="1px solid #2b4d52ff"
        boxShadow="md"
      >
        <Box width="100%">
          <Combobox.Input
            width="90%"
            placeholder={"Selecione"}
            bg="white"
            border="none"
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
            <Combobox.Empty>Nenhum item encontrado</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
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
