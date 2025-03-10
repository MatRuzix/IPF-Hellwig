import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

import Header from "@/components/header/Header";
import AppProvider from "@/lib/providers/AppProvider";
import RegistrationModal from "@/components/header/Registration/RegistrationModal";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IPF Hellwig Rehabilitacja",
  description: "Strona fizoterapeutyczna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AppProvider>
          <RegistrationModal />
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
