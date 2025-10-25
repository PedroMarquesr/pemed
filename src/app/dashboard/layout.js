"use client";

import { Flex, Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import { Provider } from "@/components/ui/provider";
import Sidebar from "@/app/dashboard/components/Sidebar/Sidebar";
import { useAuthCheck } from "@/hooks/useAuthCheck";

export default function DashboardLayout({ children }) {
  useAuthCheck();

  return (
    <>
      <Global
        styles={`
              html, body, #__next {
                width: 100%;
                max-width: 100%;
                overflow-x: hidden;
              }
    
              *, *::before, *::after { box-sizing: border-box; }
    
    
              img, svg, video, canvas {
                max-width: 100%;
                height: auto;
                display: block;
              }
    
            `}
      />
      <Provider>
        <Flex h="100vh" w="100vw" overflow="hidden">
          <Box
            h="100%"
            zIndex={2}
            w="10px"
            bg="gray.800"
            color="black"
            position="sticky"
          >
            <Sidebar />
          </Box>

          <Box
            zIndex={1}
            flex={1}
            p={20}
            overflowY="auto"
            color={"black"}
            bg={"whiteAlpha.900"}
          >
            {children}
          </Box>
        </Flex>
      </Provider>
    </>
  );
}
