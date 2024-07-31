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
import { BorderBeam } from "@/components/magicui/border-beam";
import ShineBorder from "@/components/magicui/shine-border";

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
      colorBeam: "#149ECA",
    },
    {
      title: "Turbopack",
      text: "An incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Express.ts ",
      icon: "/home/technologies/Turbopack.svg",
      href: "https://turbo.build/pack",
      colorBeam: "#B24289",
    },
    {
      title: "Speedy Web Compiler",
      text: "An extensible Rust  based platform for the next generation of fast developer tools, and can be used for both compilation and minification.",
      icon: "/home/technologies/Swc.svg",
      href: "https://swc.rs",
      colorBeam: "#FDAB7E",
    },
  ];

  return (
    <>
      {DATA.map((card, i) => (
        <ShineBorder
          className="relative flex overflow-hidden border-1 border-gray-900 bg-background md:shadow-xl p-0 bg-black"
          color={card.colorBeam}
          borderRadius={16}
          borderWidth={1}
          key={i}
        >
          <Link
            target="_blank"
            href={card.href}
            className="p-[5px] cursor-pointer transition-all relative h-full "
          >
            <div className="bg-gradient-to-b from-gray-400/5 to-gray-800/5 rounded-[12px] p-4 h-full relative hover:to-gray-950/5">
              <Image src={card.icon} width={50} height={50} alt="" />
              <div className="mt-8">
                <h4 style={inter.style} className="text-white text-xl mb-2 ">
                  {card.title}
                </h4>
                <p className="text-gray-600 text-sm">{card.text}</p>
                <FiArrowUpRight className="text-gray-600 absolute top-2 right-2" />
              </div>
              {/* Bg */}
              <DotPattern
                cr={0.6}
                cx={0.6}
                cy={0.6}
                width={32}
                height={32}
                className={cn(
                  "lg:md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)] rounded-[10px]"
                )}
              />
            </div>
          </Link>
        </ShineBorder>
      ))}
    </>
  );
};
