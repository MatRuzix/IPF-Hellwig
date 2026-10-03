import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

import Header from "@/components/header/Header";
import AppProvider from "@/lib/providers/AppProvider";
import { site } from "@/lib/site";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Fizjoterapia i rehabilitacja Malbork | IPF Hellwig",
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: site.name,
    title: "Fizjoterapia i rehabilitacja Malbork | IPF Hellwig",
    description: site.description,
    images: [{ url: "/hero_img_2.jpg", width: 1520, height: 1000, alt: "Gabinet IPF Hellwig w Malborku" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fizjoterapia i rehabilitacja Malbork | IPF Hellwig",
    description: site.description,
    images: ["/hero_img_2.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48 256x256" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${poppins.className} antialiased`}>
        <AppProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:p-4 focus:text-slate-800">Przejdź do treści</a>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
