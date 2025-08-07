"use client"
import { Box, Flex, Text, Link, Button, Image } from "@chakra-ui/react"

export default function Menu() {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      bg={"#a7ceda"}
      height={"100vh"}
      width={"100vw"}
      scrollWidth={"0"}
      color={"#000"}
    >
      <Box>
        <Text mt={20}>Menu</Text>
      </Box>
      <Box>
        <Link> </Link>
      </Box>
      <Box>
        <Link> </Link>
      </Box>
      <Box>
        <Link> </Link>
      </Box>
    </Flex>
  )
}
