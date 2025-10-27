"use client"

import {
  Flex,
  Text,
  Button,
  Badge,
  CloseButton,
  Dialog,
  Portal,
  Clipboard,
  IconButton,
} from "@chakra-ui/react"
import { useState } from "react"

export default function SaveButton({
  onclick,
  id,
  isRequired,
  children,
  ...props
}) {
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
            }}
          >
            Confirmar
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>
                  Confira os dados cadastrados
                  <Flex alignItems={"center"}>
                    <Text pr={2}>Código: </Text>
                    <Text fontSize={"xl"}>
                      {" "}
                      <Badge size="lg" colorPalette="green">
                        {id}
                      </Badge>{" "}
                    </Text>
                    <Clipboard.Root value={id}>
                      <Clipboard.Trigger asChild>
                        <IconButton variant="surface" size="md" ml={3}>
                          <Clipboard.Indicator />
                        </IconButton>
                      </Clipboard.Trigger>
                    </Clipboard.Root>
                  </Flex>
                </Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>{children}</Dialog.Body>
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
                  disabled={isRequired}
                  color={"white"}
                  _hover={{
                    color: "white",
                    bg: "rgba(19,92,254,255)",
                  }}
                >
                  Salvar
                </Button>
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
