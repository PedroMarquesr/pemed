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
import HeaderHome from "@/components/HeaderHome/HeaderHome";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";

export default function Home() {
  const { user } = useStore();
  return (
    <>
      {user?.uid ? (
        <DashboardLayout>
          <IventoryControlPage />
        </DashboardLayout>
      ) : (
        <Flex margin={"0"} p={"0"} width={"100vw"} backgroundColor={"white"}>
          <Flex
            marginX={"10%"}
            backgroundColor={"white"}
            width={"100%"}
            flexDirection={"column"}
          >
            <NavbarHome />

            <HeaderHome />

            <FeaturesSection />
          </Flex>
        </Flex>
      )}
    </>
  );
}
