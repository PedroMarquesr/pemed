"use client"
import { Box, Flex, Text, Image, List, ListRoot } from "@chakra-ui/react"

export default function Contato() {
  return (
    <Flex
      bg={"#a7ceda"}
      flexDirection={"row"}
      gap={8}
      align="stretch"
      p={6}
      width={"100vw"}
      height={"100vh"}
      justify={"space-evenly"}
    >
      <Box alignItems={"center"} textAlign={"center"}>
        <ListRoot color={"black"} pl={7} fontSize={"xl"} unstyled>
          <List.Item mb={2} mt={10}>
            <strong>Email:</strong> contato@pemed.com.br
          </List.Item>
          <List.Item>
            <strong>Telefone:</strong> (13) 1234-5678
          </List.Item>
        </ListRoot>
      </Box>
      <Box>
        <Image
          src="/contatoImage.png"
          alt="Imagem dilustrativa de contato"
          width={"400px"}
          height={"400px"}
        />
      </Box>
    </Flex>
  )
}
