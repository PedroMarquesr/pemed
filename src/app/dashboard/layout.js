"use client";
import { Flex, Box } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import Sidebar from "@/app/dashboard/components/Sidebar/Sidebar";
export default function DashboardLayout({ children }) {
  return (
    <Provider>
      <Flex h="100vh" overflow="hidden">
        <Box
          h="100%"
          zIndex={2}
          w="10px"
          bg="gray.800"
          color="white"
          position="sticky"
        >
          <Sidebar />
        </Box>

        <Box zIndex={1} flex={1} p={20} overflowY="auto" bg="gray">
          {children}
        </Box>
      </Flex>
    </Provider>
  );
}
