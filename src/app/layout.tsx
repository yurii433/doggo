import type { Metadata } from "next";
import { poppins, arizonia } from "./utils/fonts";
import "./globals.css";

import Header from "./components/layout-components/header/Header";
import Footer from "./components/layout-components/footer/Footer";
import CustomCursor from "./components/CustomCursor";

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
