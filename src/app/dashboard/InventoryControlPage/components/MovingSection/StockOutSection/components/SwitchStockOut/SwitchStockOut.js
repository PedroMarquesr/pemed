"use client";
import { SwitchLabel } from "@ark-ui/react";
import { Switch } from "@chakra-ui/react";
import { useState } from "react";

export default function SwitchStockOut({ label, set }) {
  return (
    <Switch.Root
      colorPalette={"blue"}
      onCheckedChange={(checked) => set(checked)}
      flex="1"
      p="10"
      justifyContent={"center"}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <SwitchLabel>{label}</SwitchLabel>
    </Switch.Root>
  );
}
