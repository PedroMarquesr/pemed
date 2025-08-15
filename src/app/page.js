"use client";
import react from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import Login from "@/components/login/Login";

export default function Home() {
  return (
    <Box>
      <Link href={"/login"}>
        <Text>Ir para login</Text>
      </Link>
    </Box>
  );
}
