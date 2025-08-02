"use client";

import Login from "@/components/login/Login";
import Footer from "@/components/footer/Footer";
import { Provider } from "@/components/ui/provider";

export default function Home() {
  return (
    <Provider>
      <Login />
      <Footer />
    </Provider>
  );
}
