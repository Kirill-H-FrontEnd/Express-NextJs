// > Globals styles
import "./styles/globals.scss";
import "atropos/css";
// > Providers
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
// > Next
import type { Metadata } from "next";
// > Font
import { GeistMono } from "geist/font/mono";
// > Components
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";
import { InfoModal } from "@/components/ui/Modals/Info/InfoModal";
import NextUiProvider from "./providers/nextUiProvider";

export const metadata: Metadata = {
  title: "Express.ts | The TypeScript Framework",
  description:
    "Express.ts by Vercel is the full-stack React framework for the web.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en" className="bg-black">
        <body className={`${GeistMono.className}  `}>
          <NextUiProvider>
            <NavBar />
            <main className="bg-white dark:bg-black">{children}</main>
            <Footer />
            <InfoModal />
          </NextUiProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
