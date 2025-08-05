import { Provider } from "@/components/ui/provider";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
