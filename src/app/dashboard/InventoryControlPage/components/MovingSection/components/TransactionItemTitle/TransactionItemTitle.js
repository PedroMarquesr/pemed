"use client";

import { Flex, Text } from "@chakra-ui/react";

export default function TransactionItemTitle({
  title,
  subTitle,
  icon,
  iconColor,
}) {
  return (
    <>
      <Flex flexDirection={"column"} p={"4"} pl={"4"}>
        <Flex alignItems={"center"}>
          <Text fontSize={"xl"} pr={"1"} color={iconColor}>
            {icon}
          </Text>
          <Text fontWeight={"semibold"} pl={"2"} fontSize={"lg"}>
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
