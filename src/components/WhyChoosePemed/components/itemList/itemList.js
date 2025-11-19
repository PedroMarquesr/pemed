"use client";

import { Flex, List, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

export default function ItemList({ itemText }) {
  return (
    <>
      <List.Item mb={"2"}>
        <Flex alignContent={"center"} alignItems={"center"}>
          <Text pr={"1"} fontSize={"2xl"}>
            <FaCheckCircle
              style={{
                filter:
                  "drop-shadow(0 0 0.5px rgb(5,68,105)) drop-shadow(0 0 0.5px rgb(0,152,139))",
                color: "rgb(0,152,139)",
              }}
            />{" "}
          </Text>
          <Text>{itemText}</Text>{" "}
        </Flex>
      </List.Item>
    </>
  );
}
