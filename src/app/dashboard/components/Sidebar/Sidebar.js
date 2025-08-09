"use client";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FaHome, FaPills, FaBoxOpen, FaPhone } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";

const menuItems = [
  {
    icon: AiFillMedicineBox,
    label: "Cadastro de item",
    link: "dashboard/ItemRegistration/",
  },
  {
    icon: FaPills,
    label: "Controle de estoque",
    link: "@/src/app/dashboard/medicamentos",
  },
  {
    icon: FaBoxOpen,
    label: "Insumos",
    link: "@/src/app/dashboard/insumos/page.js",
  },
  {
    icon: FaPhone,
    label: "Contato",
    link: "@/src/app/dashboard/contato/page.js",
  },
];

export default function Sidebar() {
  return (
    <Box
      as="nav"
      position="fixed"
      left="0"
      top="0"
      h="100vh"
      bg="gray.800"
      color="white"
      w="60px"
      _hover={{ w: "220px" }}
      transition="width 0.3s"
      overflow="hidden"
      zIndex="1000"
    >
      {menuItems.map((item, index) => (
        <Flex
          key={index}
          as="a"
          href={item.link}
          align="center"
          p="3"
          _hover={{ bg: "gray.700" }}
        >
          <Icon as={item.icon} boxSize="5" mr="10" />
          <Text whiteSpace="nowrap">{item.label}</Text>
        </Flex>
      ))}
    </Box>
  );
}
