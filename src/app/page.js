"use client";
import react from "react";
import Link from "next/link";
import {
  Box,
  Text,
  Flex,
  Button,
  defineAnimationStyles,
} from "@chakra-ui/react";
import useStore from "@/components/globalStates/store";
import DashboardLayout from "./dashboard/layout";
import NavbarHome from "@/components/NavbarHome/NavbarHome";
import IventoryControlPage from "./dashboard/InventoryControlPage/page";

export default function Home() {
  const { user } = useStore();
  return (
    <>
      {user?.uid ? (
        <DashboardLayout>
          <IventoryControlPage />
        </DashboardLayout>
      ) : (
        <Flex>
          <Box
            bgImage={"url('/bg-container-medications.png')"}
            bgColor={"rgba(126,198,197)"}
            backgroundPosition="center 20%"
            bgSize="cover"
            h={"40vh"}
            w={"100vw"}
            position="absolute"
            data-state="open"
            animationDuration="slow"
            animationStyle={{
              _open: "slide-fade-in",
              _closed: "slide-fade-out",
            }}
          >
            <Text>Teste</Text>
            <NavbarHome />
          </Box>
        </Flex>
      )}
    </>
  );
}
