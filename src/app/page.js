"use client";

import Login from "@/components/login/Login";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Provider } from "@/components/ui/provider";

export default function Home() {
  return (
    <>
      <Provider>
        <Navbar />
        <Login />
        <Footer />
      </Provider>
    </>
  );
}
