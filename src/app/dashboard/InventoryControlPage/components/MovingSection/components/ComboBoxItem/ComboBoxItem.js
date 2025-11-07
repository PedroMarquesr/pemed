"use client";
import {
  Box,
  Combobox,
  Portal,
  useFilter,
  useListCollection,
} from "@chakra-ui/react";

export default function ComboBoxItem({ placeholder, onSelect, listItems }) {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    initialItems: listItems || [],
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
    filter: contains,
  });

  const handleValueChange = (details) => {
    console.log("🎯 Detalhes completos do evento:", details);

    // O Chakra UI pode passar o valor de diferentes formas
    let selectedValue = details.value;

    // Se for um array, pega o primeiro item
    if (Array.isArray(selectedValue)) {
      selectedValue = selectedValue[0];
    }

    console.log("🎯 Valor selecionado processado:", selectedValue);

    if (selectedValue && onSelect) {
      const selectedItem = collection.items.find(
        (item) => item.value === selectedValue
      );

      console.log("🎯 Item encontrado:", selectedItem);

      if (selectedItem) {
        console.log("🎯 Item completo selecionado:", selectedItem);
        onSelect(selectedItem);
      } else {
        console.error("❌ Item não encontrado para o valor:", selectedValue);
        console.log(
          "❌ Itens disponíveis:",
          collection.items.map((item) => ({
            value: item.value,
            label: item.label,
          }))
        );
      }
    } else {
      console.log("❌ Nenhum valor selecionado válido");
      console.log("❌ selectedValue:", selectedValue);
      console.log("❌ onSelect existe:", !!onSelect);
    }
  };

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      onValueChange={handleValueChange}
      width="100%"
      flex="1"
    >
      <Combobox.Label fontSize="sm" fontWeight="bold" color="gray.700">
        Insira o item: *
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
      <Portal>
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
  );
}
