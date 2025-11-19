"use client";

import { Flex, Text } from "@chakra-ui/react";

export default function CardFeature({
  icon,
  iconColor,
  bgIconColor,
  titleFeature,
  subTitleFeature,
}) {
  return (
    <>
      <Flex
        border={"1px solid rgb(110,119,129, 0.5)"}
        borderRadius={"md"}
        w={"20vw"}
        h={"28vh"}
        transition="all 0.2s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          backgroundColor: "gray.100",
          boxShadow: "xl",
        }}
      >
        <Flex flexDirection={"column"} justifyContent={"space-around"}>
          <Text
            color={iconColor}
            bgColor={bgIconColor}
            fontSize="1.5vw"
            w="4vw"
            p="3"
            m="3"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
          >
            {icon}
          </Text>
          <Text fontWeight={"bold"} pl={"3"} color={"blackAlpha.800"}>
            {titleFeature}
          </Text>
          <Text pl={"3"} mb={"5"} color={"rgb(109,118,128)"}>
            {subTitleFeature}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
