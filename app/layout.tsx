// > Globals styles
import "./globals.scss";
// > Next
import type { Metadata } from "next";
// > Font
import { GeistMono } from "geist/font/mono";
// > Components
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";
// > NextUi
import NextUiProvider from "./providers/nextUiProvider";
import ModalProvider from "./providers/modalProvider";
import { SubscribeModal } from "@/components/ui/modal";
import { ButtonTop } from "./components/buttontTop/ButtonTop";
import ThemeProvider from "./providers/ThemeProvider";
import { Loader } from "@/components/ui/Loader/Loader";

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
      <body className={GeistMono.className}>
        <ThemeProvider>
          <NextUiProvider>
            <ModalProvider>
              <NavBar />
              <main>{children}</main>
              <Footer />
              <ButtonTop />
              <SubscribeModal />
            </ModalProvider>
          </NextUiProvider>
          <Loader />
        </ThemeProvider>
      </body>
    </html>
  );
}
