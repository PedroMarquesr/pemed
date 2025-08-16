"use client";
import {
  Box,
  Flex,
  Text,
  Field,
  Select,
  Fieldset,
  FieldsetLegend,
  NativeSelect,
} from "@chakra-ui/react";
import { LuPill } from "react-icons/lu";

export default function Modal1() {
  return (
    <Flex
      bg="white"
      my={"2.5"}
      w={"100%"}
      h={"100vh"}
      boxShadow={"xl"}
      flexDirection={"column"}
    >
      <Flex h={"5"}>
        <LuPill color="rgba(19,92,254,255)" border={"1px solid red"} />
        <Text color={"black"} fontWeight={"900"}>
          Identificação e especificações
        </Text>
      </Flex>
      <Flex>
        <Select.Root>
          <Select.Label>Selecione o tipo do item</Select.Label>
          <Select.Content></Select.Content>
        </Select.Root>
      </Flex>
    </Flex>
  );
}
