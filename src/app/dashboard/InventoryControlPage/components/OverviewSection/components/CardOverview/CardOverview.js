"use client";
import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/components/libs/firebaseInit";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosTrendingDown } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { vh } from "framer-motion";

export default function CardsOverview({ titleCard, icon, cardColor }) {
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "inventoryItems"));
        setItemCount(querySnapshot.size);
      } catch (error) {
        console.log(`Erro ao buscar itens`);
      }
    };
    fetchItems();
  }, []);

  const valueIcon = () => {
    switch (icon) {
      case "totalActiveItems":
        return <BsBoxSeam color="#225D9F" size={"3vw"} />;

      case "lowStock":
        return <IoIosTrendingDown color="#E45C20" size={"3vw"} />;
      case "criticalStock":
        return <IoIosTrendingDown color="#BD2E40" size={"3vw"} />;

      case "dueDateInMonths":
        return <MdOutlineDateRange color="#D68D27" size={"3vw"} />;
    }
  };

  return (
    <>
      <Flex>
        <Flex
          flex={1}
          border={"3px solid #dddadaff"}
          borderRadius={"lg"}
          w={"21vw"}
          m={0}
          px={"2vh"}
          py={"6vh"}
          bg={"white"}
          justifyContent={"space-between"}
        >
          <Flex flexDirection={"column"} pl={1}>
            <Text fontSize={"md"}>{titleCard}</Text>
            <Text fontWeight={"bold"} fontSize={"6vh"} color={cardColor}>
              {itemCount}
            </Text>
          </Flex>
          <Flex>{valueIcon(icon)}</Flex>
        </Flex>
      </Flex>
    </>
  );
}
