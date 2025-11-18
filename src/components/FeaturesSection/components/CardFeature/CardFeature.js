"use client";

import { Flex, Text } from "@chakra-ui/react";

export default function CardFeature({ icon }) {
  return (
    <>
      <Flex border={"1px solid red"} w={"20vw"} h={"20vh"}>
        <Flex>
          <Text>icon</Text>
          <Text>title feature</Text>
          <Text>subtitle feature</Text>
        </Flex>
      </Flex>
    </>
  );
}
