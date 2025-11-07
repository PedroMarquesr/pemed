"use client";
import { usePathname } from "next/navigation";
import { Provider } from "@/components/ui/provider";
import Sidebar from "./dashboard/components/Sidebar/Sidebar";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.startsWith("/dashboard");
  const isLoged = true;

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Provider>
          {isLoged ? <Sidebar /> : null}
          {children}
        </Provider>
      </body>
    </html>
  );
}
