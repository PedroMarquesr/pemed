"use client";
import react from "react";
import { Flex } from "@chakra-ui/react";
import useStore from "@/components/globalStates/store";
import DashboardLayout from "./dashboard/layout";
import NavbarHome from "@/components/NavbarHome/NavbarHome";
import IventoryControlPage from "./dashboard/InventoryControlPage/page";
import HeaderHome from "@/components/HeaderHome/HeaderHome";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import WhyChoosePemed from "@/components/WhyChoosePemed/WhyChoosePemed";
import Footer from "@/components/Footer/Footer";

import {
  SlideFromLeft,
  SlideFromRight,
  FloatUp,
  ScaleIn,
  FlipIn,
} from "@/components/animations/ScrollAnimations";

export default function Home() {
  const { user } = useStore();
  return (
    <>
      {user?.uid ? (
        <DashboardLayout>
          <IventoryControlPage />
        </DashboardLayout>
      ) : (
        <Flex flexDirection={"column"} width={"100%"} backgroundColor={"white"}>
          <NavbarHome />

          <Flex width="100%" flexDirection="column" paddingX="10%">
            <SlideFromLeft>
              <HeaderHome />
            </SlideFromLeft>
            <div id="recursos">
              <SlideFromRight>
                <FeaturesSection />
              </SlideFromRight>
            </div>
            <WhyChoosePemed />
          </Flex>

          <Footer />
        </Flex>
      )}
    </>
  );
}
