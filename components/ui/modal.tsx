"use client";
// > Zod
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// > React
import { FC, useContext } from "react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
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
        className="bg-white dark:bg-black"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className={`p-8`}>
          <ModalHeader className="grid  p-0 mb-5">
            <h2
              style={GeistSans.style}
              className="text-black font-bold dark:text-white text-2xl sm:text-3xl mb-2 "
            >
              Subscribe Now!
            </h2>
            <p className="text-gray text-sm font-normal">
              Stay updated on new releases and features, guides, and case
              studies.
            </p>
          </ModalHeader>
          <ModalBody className="p-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="my-4 grid gap-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            className="py-5"
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
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            className="py-5"
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
                  Login
                </Button>
              </form>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
