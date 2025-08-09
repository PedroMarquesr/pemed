"use client";
import { Box, Input, Flex, Text, Icon } from "@chakra-ui/react";

export default function ItemRegistration() {
  return (
    <Box>
      <Text fontSize="2xl" mb={4}>
        Registro de Item
      </Text>
      <form>
        <Flex direction="column" gap={4}>
          <Input color={"black"} placeholder="Nome do Item" />
          <Input color={"black"} placeholder="Descrição" />
        </Flex>
      </form>
    </Box>
  );
}
