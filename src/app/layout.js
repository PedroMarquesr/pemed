"use client";
import { usePathname } from "next/navigation";
import { Provider } from "@/components/ui/provider";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.startsWith("/dashboard");

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Provider>
          {!isDashboardRoute && <Navbar />}
          {children}
          {!isDashboardRoute && <Footer />}
        </Provider>
      </body>
    </html>
  );
}
