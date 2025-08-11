"use client"
import { Box, Flex, Text, Icon } from "@chakra-ui/react"
import { FaPills, FaPhone } from "react-icons/fa"
import { AiFillMedicineBox, AiOutlineStock } from "react-icons/ai"
import { IoPersonAddSharp, IoLogOutSharp } from "react-icons/io5"
import { MdPointOfSale } from "react-icons/md"
import { GiBuyCard } from "react-icons/gi"

const menuItems = [
  {
    icon: FaPills,
    label: "Cadastro de item",
    link: "/dashboard/ItemRegistration/",
  },
  {
    icon: IoPersonAddSharp,
    label: "Cadastro de cliente",
    link: "@/src/app/dashboard/medicamentos",
  },
  {
    icon: AiFillMedicineBox,
    label: "Cadastro de fornecedor",
    link: "@/src/app/dashboard/insumos/page.js",
  },
  {
    icon: AiOutlineStock,
    label: "Exibição de estoque",
    link: "@/src/app/dashboard/contato/page.js",
  },
  {
    icon: MdPointOfSale,
    label: "Saída/Venda",
    link: "@/src/app/dashboard/contato/page.js",
  },
  {
    icon: GiBuyCard,
    label: "Entrada/Compra",
    link: "@/src/app/dashboard/contato/page.js",
  },
  {
    icon: FaPhone,
    label: "Contato",
    link: "@/src/app/dashboard/contato/page.js",
  },
  {
    icon: IoLogOutSharp,
    label: "Sair",
    link: "/",
  },
]

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
      w="45px"
      _hover={{ w: "225px" }}
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
          <Icon as={item.icon} boxSize="5" mr="5" alignItems={"center"} />
          <Text whiteSpace="nowrap">{item.label}</Text>
        </Flex>
      ))}
    </Box>
  )
}
