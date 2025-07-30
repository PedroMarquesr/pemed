"use client";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
export default function Home() {
  return (
    <Provider>
      <Box
        bg="#86efac/40"
        color="white"
        margin={5}
        padding={5}
        borderRadius="md"
        boxShadow="md"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
      >
        <Box>
          <Text textAlign="center" display="flex" fontSize="2xl">
            Login
          </Text>
        </Box>
        <Box></Box>
      </Box>
    </Provider>
  );
}
