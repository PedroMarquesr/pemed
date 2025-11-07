"use client";
import { Box, Flex, Text, Icon, Button } from "@chakra-ui/react";
import { FaPills, FaPhone } from "react-icons/fa";
import { AiFillMedicineBox, AiOutlineStock } from "react-icons/ai";
import { IoPersonAddSharp, IoLogOutSharp } from "react-icons/io5";
import { MdPointOfSale } from "react-icons/md";
import { GiBuyCard } from "react-icons/gi";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import useStore from "@/components/globalStates/store";

export default function Sidebar() {
  const { user, signOutUser } = useStore();

  const menuItems = [
    {
      icon: FaPills,
      label: "Cadastro de item",
      link: "/dashboard/inventory/registration",
    },
    {
      icon: IoPersonAddSharp,
      label: "Cadastro de cliente",
      link: "/dashboard/ClientRegistrationSection",
    },
    {
      icon: AiFillMedicineBox,
      label: "Cadastro de fornecedor",
      link: "/dashboard/SupplierRegistrationSection",
    },
    {
      icon: AiOutlineStock,
      label: "Operação de estoque",
      link: "/dashboard/InventoryControlPage",
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
  ];
  return (
    <>
      {user?.uid && (
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
          flexDirection={"column"}
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

          <Flex
            as="button"
            onClick={signOutUser}
            align="center"
            p="3"
            _hover={{ bg: "gray.700" }}
            w="100%"
            border="none"
            bg="transparent"
            color="white"
            cursor="pointer"
          >
            <Icon as={IoLogOutSharp} boxSize="5" mr="5" />
            <Text whiteSpace="nowrap">Sair</Text>
          </Flex>
        </Box>
      )}
    </>
  );
}
