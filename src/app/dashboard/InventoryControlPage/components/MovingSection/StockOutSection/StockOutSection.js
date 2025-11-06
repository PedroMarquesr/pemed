"use client";
import { Flex, Text, Grid, Box } from "@chakra-ui/react";
import TransactionItemTitle from "../components/TransactionItemTitle/TransactionItemTitle";
import InputEntry from "../components/InputEntry/InputEntry";
import SwitchStockOut from "./components/SwitchStockOut/SwitchStockOut";
import ComboBoxItem from "../components/ComboBoxItem/ComboBoxItem";
import { FaMinus } from "react-icons/fa6";
import useStore from "@/components/globalStates/store";
import { useState } from "react";

export default function StockOutSection() {
  const { user } = useStore();
  const [isDelivery, setIsDelivery] = useState(false);

  return (
    <>
      <Flex
        bg="white"
        borderRadius="md"
        my={5}
        w="100%"
        boxShadow="xl"
        flexDirection={"column"}
      >
        <Flex justifyContent={"space-between"}>
          <TransactionItemTitle
            icon={<FaMinus />}
            iconColor={"#BD2E40"}
            title={"Registrar Saída"}
            subTitle={"Registre a saída de item no estoque"}
          />{" "}
          <TransactionItemTitle
            title={"Vendedor"}
            subTitle={user?.displayName}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <InputEntry labelName={"Cliente"} />
          <InputEntry labelName={"Tipo de saída"} />
          <Flex flexDirection={"column"}>
            <SwitchStockOut
              set={(e) => setIsDelivery(e.checked)}
              label={"Inserir endereço de entrega"}
            />

            <Text>isDelivey: {JSON.stringify(isDelivery)}</Text>
          </Flex>
        </Flex>
        <Flex alignItems={"stretch"}>
          <Grid templateColumns="repeat(3, 2fr)" gap="6">
            <Box>
              <Text>teste</Text>
            </Box>
            <Box>
              <Text>teste</Text>
            </Box>
            <Box>
              <Text>teste</Text>
            </Box>
            <Box>
              <Text>teste</Text>
            </Box>
            <Box>
              <Text>teste</Text>
            </Box>
            <Box>
              <Text>teste</Text>
            </Box>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}
