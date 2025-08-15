"use client";
import { usePathname } from "next/navigation";
import { Provider } from "@/components/ui/provider";
import Footer from "@/components/footer/Footer";
import Sidebar from "./dashboard/components/Sidebar/Sidebar";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.startsWith("/dashboard");
  const isLoged = true;

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Provider>
          {isLoged ? <Sidebar /> : null}
          {children}
          {isLoged ? <Footer /> : null}
        </Provider>
      </body>
    </html>
  );
}
