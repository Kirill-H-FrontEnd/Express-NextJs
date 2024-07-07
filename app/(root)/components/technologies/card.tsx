// > React
import { FC, useRef } from "react";
// > Icons
import { FiArrowUpRight } from "react-icons/fi";
// > Font
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/bg/dot-pattern";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

export const Card: FC = ({}) => {
  const DATA = [
    {
      title: "React",
      text: "The library for web and native user interfaces. Express.ts is built on the latest React features, including Server Components and Actions.",
      icon: "/home/technologies/React.svg",
      href: "https://react.dev",
    },
    {
      title: "Turbopack",
      text: "An incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Express.ts ",
      icon: "/home/technologies/Turbopack.svg",
      href: "https://turbo.build/pack",
    },
    {
      title: "Speedy Web Compiler",
      text: "An extensible Rust  based platform for the next generation of fast developer tools, and can be used for both compilation and minification.",
      icon: "/home/technologies/Swc.svg",
      href: "https://swc.rs",
    },
  ];
  return (
    <>
      {DATA.map((card, i) => (
        <Link
          key={i}
          target="_blank"
          href={card.href}
          className=" border-2 border-gray-500/20 rounded-2xl p-1 cursor-pointer hover:border-gray-500/40 transition-all shadow-md "
        >
          <div className="bg-gray-500/5 rounded-[11px] p-4 h-full relative ">
            <Image src={card.icon} width={50} height={50} alt="" />
            <div className="mt-8">
              <h4 style={inter.style} className="text-white text-xl mb-2 ">
                {card.title}
              </h4>
              <p className="text-gray-600 text-sm">{card.text}</p>
              <FiArrowUpRight className="text-gray-600 absolute top-2 right-2" />
            </div>
            <DotPattern
              cr={0.5}
              cx={0.5}
              cy={0.5}
              width={35}
              height={35}
              className={cn(
                "lg:md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)] rounded-[10px]"
              )}
            />
          </div>
          {/* Bg */}
        </Link>
      ))}
    </>
  );
};
