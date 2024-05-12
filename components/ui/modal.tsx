"use client";
// > Zod
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// > React
import { FC, useContext } from "react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
// > Next
import Image from "next/image";
// > Context
import { useModalContext } from "@/app/providers/modalProvider";
// > Components
import { Input } from "@/components/ui/input";
import { Button } from "@nextui-org/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// > Schemas
import { SubscribeSchema } from "@/schemas/";
// > NextUI
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
// > Font
import { GeistSans } from "geist/font/sans";

export const SubscribeModal: FC = ({}) => {
  const { isOpen, onOpenChange } = useContext(useModalContext);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof SubscribeSchema>>({
    resolver: zodResolver(SubscribeSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });
  const onSubmit = (values: z.infer<typeof SubscribeSchema>) => {};
  return (
    <>
      <Modal
        size="sm"
        className="bg-black bg-[url('/home/animBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden"
        placement="center"
        isOpen={isOpen}
        classNames={{
          closeButton:
            "z-20  hover:bg-transparent hover:text-white active:bg-transparent text-lg",
        }}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent className={`p-8`}>
          {/* Background */}
          <Image
            src={"/home/gradientBg.svg"}
            alt="gradientBg"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-10 pointer-events-none select-none"
            width={1000}
            height={1000}
          />
          <div className="pointer-events-none ">
            <div className="absolute inset-0 rounded-2xl transition duration-300 bg-gradient-to-r from-[#151B2D] to-transparent [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50 z-0">
              <svg
                aria-hidden="true"
                className="absolute inset-x-[2%] inset-y-[-80%] h-[160%] w-full skew-y-[-18deg] fill-transparent stroke-[#1A1C33]  text-purple-950/5 dark:fill-white/1 dark:stroke-white/2.5"
              >
                <defs>
                  <pattern
                    id=":bg3"
                    width="52"
                    height="52"
                    patternUnits="userSpaceOnUse"
                    x="50%"
                    y="16"
                  >
                    <path d="M.5 56V.5H72" fill="none"></path>
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="url(#:bg3)"
                ></rect>
              </svg>
            </div>
          </div>
          <ModalHeader className="relative z-20 grid   p-0 mb-5">
            <h2
              style={GeistSans.style}
              className="text-white font-bold dark:text-white text-2xl sm:text-3xl mb-2 "
            >
              Subscribe Now!
            </h2>
            <p className="text-gray text-sm font-normal">
              Stay updated on new releases and features, guides, and case
              studies.
            </p>
          </ModalHeader>
          <ModalBody className="p-0 relative z-20">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="my-4 grid gap-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="mb-1">
                        <h5 className="text-white text-sm">Name</h5>
                        <FormControl>
                          <Input
                            className="py-5 placeholder:text-gray text-violet bg-white"
                            disabled={isPending}
                            {...field}
                            placeholder="Jon Doe"
                            type="name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mb-1">
                        <h5 className="text-white text-sm">Email</h5>
                        <FormControl>
                          <Input
                            className="py-5 text-violet placeholder:text-gray bg-white"
                            disabled={isPending}
                            {...field}
                            placeholder="Enter your email"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  disabled={isPending}
                  size={"md"}
                  type="submit"
                  className="text-white w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet to-black hover:shadow-lg transition-shadow
            "
                >
                  Subscribe
                </Button>
              </form>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
