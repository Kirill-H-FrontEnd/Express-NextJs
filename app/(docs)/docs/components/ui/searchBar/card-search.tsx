"use client";
import { FC, useEffect, useState } from "react";
// > Next
import Link from "next/link";
// > Styles
import { cn } from "@/lib/utils";
// > Components
import {
  DialogContent,
  DialogHeader,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import GridPattern from "@/components/magicui/bg/grid-pattern";
import { ScrollShadow } from "@nextui-org/react";
import DotPattern from "@/components/magicui/bg/dot-pattern";
// > Animation
import { motion, Variants } from "framer-motion";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});
// > Icons
import { NotepadText, Hash } from "lucide-react";
import { MagnifyingGlassIcon, Cross1Icon } from "@radix-ui/react-icons";
// > Hooks
import useMediaQuery from "@/hooks/useMediaQuery";

export const CardSearch: FC = ({}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [pagesData, setPagesData] = useState([]);
  const [searchStarted, setSearchStarted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  // Search logic
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/SearchPages");
      const data = await res.json();
      setPagesData(data);
    };

    fetchData();
  }, []);

  const calculateRelevance = (page, query) => {
    let score = 0;
    const queryLower = query.toLowerCase();

    if (page.title.toLowerCase().includes(queryLower)) {
      score += 10;
    }

    page.content.forEach((sub) => {
      if (sub.title.toLowerCase().includes(queryLower)) {
        score += 5;
      }
    });

    page.content.forEach((sub) => {
      if (sub.text.toLowerCase().includes(queryLower)) {
        score += 1;
      }
    });

    return score;
  };

  useEffect(() => {
    if (query.length > 0) {
      setSearchStarted(true);
      const filteredResults = pagesData
        .map((page) => ({
          ...page,
          relevance: calculateRelevance(page, query),
        }))
        .filter((page) => page.relevance > 0)
        .sort((a, b) => b.relevance - a.relevance);
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query, pagesData]);

  const Variants: Variants = {
    offscreen: {
      y: 10,
      opacity: 0,
    },
    onscreen: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.2,
      },
    }),
  };
  return (
    <DialogContent
      aria-describedby="This is card for searching documentation..."
      className="bg-white dark:bg-black sm:rounded-md overflow-hidden select-none sm:border-1 border-slate-300 sm:dark:border-gray-900 block p-0 gap-0"
    >
      <DialogHeader className="relative w-full py-1 bg-white dark:bg-black z-[10]">
        <DialogTitle className="grid justify-start">
          <MagnifyingGlassIcon
            width={20}
            height={20}
            className="absolute top-1/2 left-[10px] -translate-y-1/2 text-slate-400"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            type="text"
            className="bg-transparent pl-10 pr-14 py-3 mt-0 text-sm placeholder:font-normal"
          />
          <DialogClose
            style={inter.style}
            className="absolute top-1/2 right-[10px] -translate-y-1/2  text-[12px] border-1 border-slate-200 dark:border-gray-900 p-[5px] rounded-md font-medium hover:bg-slate-100 text-gray-400 dark:text-gray-400 hover:dark:bg-gray-800/20 m-0 active:scale-[.9] transition-transform"
          >
            {isDesktop ? (
              "Esc"
            ) : (
              <Cross1Icon width={20} hanging={20} className="text-gray-600 " />
            )}
          </DialogClose>
        </DialogTitle>
      </DialogHeader>
      <ScrollShadow
        className="h-full"
        hideScrollBar
        style={{ scrollbarWidth: "initial" }}
        size={20}
      >
        <div className="h-full sm:h-[300px] bg-white dark:bg-black relative w-full px-2 pt-2 pb-4 border-t-1 border-gray-200 dark:border-gray-900 ">
          {(!searchStarted ||
            (query.length > 0 && results.length === 0) ||
            !query) && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-sm w-full text-center">
              No results found for{!query ? "..." : ` '${query}'`}
            </div>
          )}
          {searchStarted && results.length > 0 && (
            <div className="grid gap-2 ">
              {results.map((result) => (
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={Variants}
                  key={result.id}
                >
                  <Link
                    href={result.path}
                    style={inter.style}
                    className="grid grid-cols-2-auto justify-start gap-2  items-center p-2 select-text hover:bg-gray-100 hover:dark:bg-gray-700/10 rounded-sm font-semibold  text-black dark:text-white text-md relative"
                  >
                    <NotepadText
                      size={18}
                      className="text-gray-400 dark:text-gray-600 font-bold text-lg"
                    />
                    <h4>{result.title}</h4>
                  </Link>
                  <div className="border-l-1 border-gray-200 dark:border-gray-900 ml-4 pl-2 grid gap-2 mt-2">
                    {result.content.map((subContent, i) => (
                      <Link
                        href={subContent.path}
                        key={i}
                        className="select-text hover:bg-gray-100 hover:dark:bg-gray-700/10 p-2 rounded-sm"
                      >
                        <div className="grid grid-cols-2-auto justify-start gap-2 items-center">
                          <Hash
                            size={14}
                            strokeWidth={2.5}
                            className="text-gray-400 dark:text-gray-600"
                          />
                          <h5
                            style={inter.style}
                            className="text-sm font-medium "
                          >
                            {subContent.title}
                          </h5>
                        </div>
                        <p className="line-clamp-1 text-sm mt-1">
                          {subContent.text}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </ScrollShadow>
      {/* Bg */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"8 4"}
        className={cn(
          "[mask-image:radial-gradient(220px_circle_at_center,white,transparent)] hidden dark:block"
        )}
      />
      <DotPattern
        width={25}
        height={25}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]  fill-slate-300 dark:hidden"
        )}
      />
    </DialogContent>
  );
};
