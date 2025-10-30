"use client"
import { Flex, Button } from "@chakra-ui/react"

export default function UpdateButton({ onClick, isRequired }) {
  return (
    <>
      <Flex justifyContent={"center"} pb={9}>
        <Button
          border={"none"}
          variant="outline"
          size="sm"
          p={"6"}
          mr={"2"}
          bg={"#181818"}
          w={"15%"}
          fontWeight={"semibold"}
          fontSize={"md"}
          boxShadow={"md"}
          _hover={{
            color: "white",
            bg: "rgba(19,92,254,255)",
          }}
          color={"white"}
          onClick={onClick}
          disabled={isRequired}
        >
          Salvar
        </Button>
      </Flex>
    </>
  )
}
