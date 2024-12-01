"use client";
// > React
import { FC, useEffect, useState } from "react";
// > Next
import { usePathname } from "next/navigation";
// > Auth
import Link from "next/link";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
});
// > Styles
import s from "./styles/NavBar.module.scss";
// > NextUI
import { Tooltip } from "@nextui-org/react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
// > Icons
import { VscGithub } from "react-icons/vsc";
import { Squirrel } from "lucide-react";
// > Components
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { SubscribeForm } from "../footer/subscribe-form";
import { IoClose } from "react-icons/io5";
import { useCurrentUser } from "@/hooks/use-current-user";
export const NavBar: FC = ({}) => {
  const [isScroll, setScroll] = useState(false);
  const [openSubForm, setOpenSubForm] = useState(false);
  const pathName = usePathname();

  let hideNavigation = pathName === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Add new styles when scrolling the page
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY != 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [isScroll]);
  const DATA_TOGGLE_MENU_LINKS = [
    {
      title: "What will I Learn",
      href: "",
    },
    {
      title: "Deploy",
      href: "",
    },
    {
      title: "Showcase",
      href: "",
    },
    {
      title: "Docs",
      href: "",
    },
    {
      title: "Blog",
      href: "",
    },
    {
      title: "Express.ts Commerce",
      href: "",
    },
    {
      title: "Templates",
      href: "",
    },
    {
      title: "Enterprise",
      href: "",
    },
    {
      title: "GitHub",
      href: "",
    },
  ];
  const user = useCurrentUser();
  return (
    <>
      {hideNavigation && (
        <Navbar
          disableAnimation
          maxWidth="full"
          className={`${
            s.navBar
          } z-[50] fixed top-0 left-0  bg-black/40  border-b-1 border-borderDark ${
            isMenuOpen ? " bg-black/70" : ""
          } ${isScroll ? "backdrop-blur-md " : "backdrop-blur-sm"}`}
          onMenuOpenChange={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        >
          <div className="container">
            <section
              className={`${s.wrapper} grid grid-cols-2-auto justify-between items-center`}
            >
              <Link
                href={"/"}
                className="grid grid-cols-2-auto items-end gap-1 justify-start hover:opacity-80 transition-opacity select-none relative"
              >
                <Squirrel
                  className="absolute top-0 left-0 "
                  color="#fff"
                  size={26}
                  strokeWidth={1.7}
                />
                <p
                  style={inter.style}
                  className="relative font-medium text-2xl text-white ml-[30px]"
                >
                  <span className=" text-white">Express</span>
                  <span className="absolute top-[5px] -right-[14px] font-medium text-[12px] text-transparent bg-clip-text bg-gradient-to-b   from-white to-slate-400">
                    .ts
                  </span>
                </p>
              </Link>
              <nav
                className={`hidden sm:grid grid-cols-3-auto gap-4 items-center`}
              >
                {user ? (
                  <Button
                    as={Link}
                    radius="full"
                    className="text-black bg-white font-semibold px-6 hover:bg-slate-300 "
                    href={`/docs`}
                  >
                    Dashboard
                  </Button>
                ) : (
                  <>
                    <Link
                      className="hidden md:block hover:text-slate-300 text-white"
                      href="/auth/login"
                    >
                      Login
                    </Link>
                    <Button
                      as={Link}
                      radius="full"
                      className="text-black bg-white font-semibold px-6 hover:bg-slate-300 "
                      href={`/auth/register`}
                    >
                      Sign Up
                    </Button>
                  </>
                )}

                <div className="relative hidden sm:grid grid-cols-2-auto items-center gap-2 ">
                  <span className="absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2 w-[1px] h-[80%] bg-slate-500 rounded-full pointer-events-none"></span>
                  <Tooltip
                    style={inter.style}
                    closeDelay={200}
                    offset={10}
                    size="sm"
                    content="Dev.GitHub"
                    placement="bottom"
                    classNames={{
                      content: "font-semibold bg-white text-black",
                    }}
                  >
                    <Link
                      href={"https://github.com/Kirill-H-FrontEnd"}
                      target="_blank"
                      className="ml-[16px]"
                    >
                      <VscGithub
                        className="text-slate-400 hover:text-slate-200 transition-colors"
                        size={22}
                      />
                    </Link>
                  </Tooltip>
                </div>
              </nav>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className={`${s.navBarMenuToggle} sm:hidden text-white [&[data-pressed]]:-scale-[.9] `}
              />
            </section>
          </div>
          {/* ToggleMenu */}
          <NavbarMenu className="bg-black/60 backdrop:blur-md pt-6 z-[48] ">
            <div className="grid gap-5 pb-2">
              {DATA_TOGGLE_MENU_LINKS.map((item, index) => (
                <NavbarMenuItem
                  className=""
                  key={`${item}-${index}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    className={`relative  text-lg ${
                      pathName === item.href ? `text-white` : " text-slate-300 "
                    }`}
                    key={index}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </NavbarMenuItem>
              ))}

              {user ? (
                <Button
                  as={Link}
                  radius="full"
                  className="text-black bg-white font-semibold px-6 hover:bg-slate-300 "
                  href={`/docs`}
                >
                  Dashboard
                </Button>
              ) : (
                <Button
                  as={Link}
                  radius="full"
                  className="text-black bg-white font-semibold px-6 hover:bg-slate-300 "
                  href={`/auth/register`}
                >
                  Sign Up
                </Button>
              )}

              <Dialog open={openSubForm} onOpenChange={setOpenSubForm}>
                <DialogTrigger asChild>
                  <ShimmerButton
                    shimmerSize="0.06em"
                    className={`w-full shadow-2xl text-sm font-medium  py-[11px]`}
                  >
                    Subscription
                  </ShimmerButton>
                </DialogTrigger>
                <DialogContent
                  onOpenAutoFocus={(event) => event.preventDefault()}
                  className=" bg-black sm:rounded-md overflow-hidden select-none  grid place-items-center"
                >
                  <div>
                    <DialogHeader>
                      <DialogTitle
                        style={inter.style}
                        className="text-transparent bg-clip-text bg-gradient-to-b from-[#241A3E] to-white text-center text-2xl select-text mb-2"
                      >
                        Subscribe to our newsletter
                      </DialogTitle>
                      <p className="text-gray-600 text-center select-text">
                        Stay updated on new releases and features, guides, and
                        case studies.
                      </p>
                    </DialogHeader>
                    <SubscribeForm />
                    <DialogClose className="absolute top-4 right-4 text-white z-[10]">
                      <IoClose size={18} />
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </NavbarMenu>
        </Navbar>
      )}
    </>
  );
};
