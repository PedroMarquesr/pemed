"use client"

import {
  Flex,
  Text,
  Box,
  Button,
  CloseButton,
  Dialog,
  Portal,
} from "@chakra-ui/react"
import { useState } from "react"

export default function SaveButton({ onclick, onReset }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex textAlign={"center"} justifyContent={"center"}>
      <Dialog.Root>
        <Dialog.Trigger asChild>
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
              // transform: "translateY(-3px)",
              // transition: "transform 0.2s ease",
            }}
          >
            Confirmar{" "}
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Confirmar</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <p>Confira os dados cadastrados.</p>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button
                    p={"6"}
                    mr={"2"}
                    bg={"#181818"}
                    variant="outline"
                    size="sm"
                    fontWeight={"semibold"}
                    fontSize={"md"}
                    boxShadow={"md"}
                    color={"white"}
                    _hover={{
                      color: "white",
                      bg: "red.800",
                      // transform: "translateY(-3px)",
                      // transition: "transform 0.2s ease",
                    }}
                  >
                    Cancelar
                  </Button>
                </Dialog.ActionTrigger>
                <Button
                  p={"6"}
                  mr={"2"}
                  bg={"#181818"}
                  variant="outline"
                  size="sm"
                  fontWeight={"semibold"}
                  fontSize={"md"}
                  boxShadow={"md"}
                  onClick={onclick}
                  color={"white"}
                  _hover={{
                    color: "white",
                    bg: "rgba(19,92,254,255)",
                    // transform: "translateY(-3px)",
                    // transition: "transform 0.2s ease",
                  }}
                >
                  Salvar{" "}
                </Button>{" "}
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Flex>
  )
}
