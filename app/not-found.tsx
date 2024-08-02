"use client";
// > Styles
import s from "./styles/not-found.module.scss";
// > Next UI
import { Button } from "@nextui-org/react";
// > Next
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// Icons
import { IoBookSharp, IoLogoElectron } from "react-icons/io5";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { GiDatabase } from "react-icons/gi";
import { MdHomeFilled } from "react-icons/md";
import { PiContactlessPaymentFill } from "react-icons/pi";
// > Font
import { GeistSans } from "geist/font/sans";
export default function NotFoundPage() {
  const pathName = usePathname().replace("/", " ");
  const { back } = useRouter();
  const DATA_CARDS = [
    {
      title: "Home",
      href: "/",
      suptTitle: "Return to Home page.",
      icon: <MdHomeFilled size={26} />,
    },
    {
      title: "Documentation",
      href: "/",
      suptTitle: "Learn how to integrate our tools with your app.",
      icon: <IoBookSharp size={26} />,
    },
    {
      title: "API Reference",
      href: "/",
      suptTitle: "A complete API reference for our libraries.",
      icon: <GiDatabase size={26} />,
    },
    {
      title: "Guides",
      href: "/",
      suptTitle: "Installation guides that cover popular setups.",
      icon: <BsBookmarkCheckFill size={26} />,
    },
    {
      title: "Blog",
      href: "/",
      suptTitle: "Read our latest news and articles.",
      icon: <PiContactlessPaymentFill size={26} />,
    },
  ];
  return (
    <section
      className={`${s.notFound} bg-black grid grid-cols-1 justify-center items-center py-10 `}
    >
      <div className="container">
        <section className={`${s.wrapper} max-w-[700px] m-auto `}>
          <article className="grid gap-2 text-center ">
            <div className="grid justify-center mb-10">
              <IoLogoElectron
                color="#fff"
                size={45}
                className="animate-spin-slow "
              />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-violet to-white text-xl font-medium">
              404
            </span>
            <h2
              style={GeistSans.style}
              className="text-white text-5xl font-bold"
            >
              This page does not exist
            </h2>
            <p className="text-slate-300 font-medium text-base">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
          </article>
          <section className={`${s.cards} `}>
            {DATA_CARDS.map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className=" border-b-1 border-slate-700 py-7"
              >
                <div className="text-purple-500 border-1 border-gray/20 rounded-md inline-block p-2">
                  {card.icon}
                </div>
                <div>
                  <h5
                    style={GeistSans.style}
                    className="text-white text-base font-medium"
                  >
                    {card.title}
                  </h5>
                  <p className="text-slate-300 text-sm">{card.suptTitle}</p>
                </div>
              </Link>
            ))}
          </section>
          <div>
            <Button onClick={() => back()}>Go back</Button>
            <Button as={Link} href="/">
              Go home
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
}
