import type { Metadata } from "next";
import { poppins } from "./utils/fonts";
import "./globals.css";
import "./globalicons.css";

import Header from "./components/layout-components/header/Header";
import Footer from "./components/layout-components/footer/Footer";

export const metadata: Metadata = {
  title: "Dogo",
  description: "Created by YD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} `}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
