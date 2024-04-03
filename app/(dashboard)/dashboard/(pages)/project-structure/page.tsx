"use client";
import { FC } from "react";
import s from "./styles/page.module.scss";
import { ScrollShadow } from "@nextui-org/react";
type TDashboardHomePage = {};
// > ScrollLink
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

import { Aside } from "../../components/aside/Aside";
import { HeaderPage } from "../../components/ui/header-page";
import ScrollShadowProvider from "@/app/providers/scrollShadowProvider";

const ProjectStructure = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const DATA_ASIDE_LINKS = [
    { value: "Top-level folders", href: "test1" },
    { value: "Top-level files", href: "test2" },
    { value: "app Routing Conventions", href: "text2" },
    { value: "Routing Files", href: "/" },
    { value: "Nested Routes", href: "/" },
    { value: "Dynamic Routes", href: "/" },
    { value: "Route Groups and Private Folders", href: "/" },
    { value: "Parallel and Intercepted Routes", href: "/" },
    { value: "Metadata File Conventions", href: "/" },
    { value: "App Icons", href: "/" },
    { value: "Open Graph and Twitter Images", href: "/" },
    { value: "SEO", href: "/" },
    { value: "pages Routing Conventions", href: "/" },
    { value: "Special Files", href: "/" },
    { value: "Routes", href: "/" },
    { value: "Dynamic Routes", href: "/" },
  ];
  return (
    <>
      <ScrollShadowProvider>
        <HeaderPage
          title="Protocol.js Project Structure"
          text="This page provides an overview of the project structure of a Next.js application. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories."
        />
      </ScrollShadowProvider>
      <Aside data={DATA_ASIDE_LINKS} />
    </>
  );
};

export default ProjectStructure;
