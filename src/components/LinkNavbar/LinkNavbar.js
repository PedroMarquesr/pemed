"use client";

import { Link } from "@chakra-ui/react";

export default function LinkNavbar({ children, href }) {
  return (
    <>
      <Link color={"black"} pr={3} href={href} target="_blank">
        {children}
      </Link>
    </>
  );
}
