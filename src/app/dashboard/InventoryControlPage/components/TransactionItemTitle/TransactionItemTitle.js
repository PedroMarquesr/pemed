"use client";

import { Flex, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";

export default function TransactionItemTitle({
  title,
  subTitle,
  icon,
  iconColor,
}) {
  return (
    <>
      <Flex flexDirection={"column"} p={"4"} pl={"10"}>
        <Flex alignItems={"center"}>
          <Text fontSize={"lg"} pr={"1"} color={iconColor}>
            {icon}
          </Text>
          <Text fontWeight={"semibold"} fontSize={"lg"}>
            {title}
          </Text>
        </Flex>
        <Flex>
          <Text color={"#52575c"}>{subTitle}</Text>
        </Flex>
      </Flex>
    </>
  );
}
