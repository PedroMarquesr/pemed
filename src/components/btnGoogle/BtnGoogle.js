"use client";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import { app, db } from "@/components/libs/firebaseInit.js";
import { useRouter } from "next/navigation";
import useStore from "@/components/globalStates/store";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

// import { useRouter } from "next/router";

export default function BtnGogle() {
  const auth = getAuth(app);
  const router = useRouter();
  const getUser = useStore((state) => state.getUser);

  async function loginGoogle() {
    const provider = new GoogleAuthProvider();
    console.log(`Clicou no botão`);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(result);
        console.log(`Objeto recebido no login`, user);
        getUser();
        router.push("/");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <Box>
      <Button
        onClick={loginGoogle}
        background="#d50d0d"
        color="white"
        fontWeight="600"
        padding="5px 40px 5px 10px"
        width="200px"
        justifyContent="space-between"
      >
        <Flex
          height="100%"
          fontSize="30px"
          paddingRight="8px"
          textAlign="start"
          borderRight="1px solid #8c8c8c"
          alignItems="center"
        >
          G
        </Flex>
        <Flex>Login Google</Flex>
      </Button>
    </Box>
  );
}
