"use client";
import { FC, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
// > Zod
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// > Next
import Link from "next/link";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});
// > Schemas
import { RegisterSchema } from "@/schemas/";
// > Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "./card-wrapper";
import { Input } from "@/components/ui/input";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
// > Actions
import { register } from "@/actions/register";

type TLoginForm = {};

export const RegisterForm: FC<TLoginForm> = ({}) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
  return (
    <CardWrapper
      headerTitle="Welcome to Express, register with"
      headerLabel="Already have an account?"
      backButtonLabel="Log In."
      backButtonHref="/auth/login"
      showSocial
      contentPrivacy={
        <>
          <p className="text-xs text-gray-600 text-center leading-5">
            By sign up, you agree to our{" "}
            <Link className="text-bluePrimary" href={""}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link className="text-bluePrimary" href={""}>
              Privacy.
            </Link>
          </p>
        </>
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="my-4 grid gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <label
                    style={inter.style}
                    className="text-sm text-white font-normal"
                  >
                    Name
                  </label>
                  <FormControl>
                    <Input
                      className="py-5 bg-white focus:shadow-black "
                      disabled={isPending}
                      {...field}
                      placeholder="Enter your name"
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
                  <label
                    style={inter.style}
                    className="text-sm text-white font-normal"
                  >
                    Email
                  </label>
                  <FormControl>
                    <Input
                      className="py-5 bg-white focus:shadow-black"
                      disabled={isPending}
                      {...field}
                      placeholder="john.doe@example.com"
                      type="email"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <label
                    style={inter.style}
                    className="text-sm text-white font-normal"
                  >
                    Password
                  </label>
                  <FormControl>
                    <Input
                      className="py-5 bg-white focus:shadow-black"
                      disabled={isPending}
                      {...field}
                      placeholder="Create password"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <ShimmerButton
            disabled={isPending}
            type="submit"
            className={`w-full shadow-2xl text-white text-sm font-medium h-[42px] ${
              isPending ? "opacity-50 cursor-no-drop" : ""
            }`}
          >
            {isPending ? "Sending..." : "Register"}
          </ShimmerButton>
        </form>
      </Form>
    </CardWrapper>
  );
};
