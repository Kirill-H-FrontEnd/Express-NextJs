// > Globals styles
import "./globals.scss";
import "atropos/css";
// > Next
import type { Metadata } from "next";
// > Font
import { GeistMono } from "geist/font/mono";
// > Components
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";
import { InfoModal } from "@/components/ui/Modals/Info/InfoModal";
// > NextUi
import NextUiProvider from "./providers/nextUiProvider";

export const metadata: Metadata = {
  title: "Protocol | Home",
  description: "Protocol is a web Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${GeistMono.className}  bg-black`}>
        <NextUiProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
          <InfoModal />
        </NextUiProvider>
      </body>
    </html>
  );
}
