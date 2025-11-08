"use client";

import { Flex } from "@chakra-ui/react";

export default function ContainerForm({ gap, key, mr, children, ...props }) {
  return (
    <>
      <Flex
        w={"100%"}
        key={key}
        alignItems="center"
        justifyContent="flex-start"
        pl={4}
        mr={mr}
        gap={gap}
      >
        {children}
      </Flex>
    </>
  );
}
