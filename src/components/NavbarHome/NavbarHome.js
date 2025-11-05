"use client";
import { Box, Flex, Link, Image, Button, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
export default function NavbarHome() {
  const pathname = usePathname();
  const router = useRouter();

  const isLoginPage = pathname === "/login";
  return (
    <>
      <Flex
        w={"100vw"}
        bgGradient={"to-t"}
        gradientFrom="white/0"
        gradientTo="rgba(126,198,197)/90"
        color="white"
        h={"8vh"}
        justifyContent={"space-between"}
        alignItems={"center"}
        top={"0"}
        position={"absolute"}
      >
        {isLoginPage ? (
          <>
            <Button
              bg={"#181818"}
              ml={"2"}
              size="sm"
              fontWeight={"semibold"}
              boxShadow={"md"}
              color={"white"}
              _hover={{
                color: "white",
                bg: "rgba(19,92,254,255)",
              }}
              onClick={() => router.push("/")}
            >
              Voltar
            </Button>
            <Box></Box>
          </>
        ) : (
          <>
            <Box></Box>
            <Button
              mr={"2"}
              bg={"#181818"}
              size="sm"
              fontWeight={"semibold"}
              boxShadow={"md"}
              color={"white"}
              _hover={{
                color: "white",
                bg: "rgba(19,92,254,255)",
              }}
              onClick={() => router.push("/login")}
            >
              {/* <Link href={"/login"}> */}
              <Text>Login</Text>
              {/* </Link> */}
            </Button>
          </>
        )}
      </Flex>
    </>
  );
}
