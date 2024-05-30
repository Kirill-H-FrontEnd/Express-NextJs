"use client";
// > Zod
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// > React
import { FC, useState } from "react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
// > Next
import { useSearchParams } from "next/navigation";
// > Font
import { GeistSans } from "geist/font/sans";
// > Schemas
import { LoginSchema } from "@/schemas/";
// > Components
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "./card-wrapper";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
// > Actions
import { login } from "@/actions/login";
import Link from "next/link";

export const LoginForm: FC = ({}) => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";
  const [error, setError] = useState<string | undefined>("");
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values)
        .then((data: any) => {
          if (data.error) {
            form.reset();
            setError(data.error);
          }
          if (data.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };
  return (
    <CardWrapper
      headerTitle="Log in to Protocol"
      headerLabel="Don't have an account?"
      backButtonLabel="Sign Up."
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="my-4 grid gap-3">
            {showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        style={GeistSans.style}
                        className="text-sm text-white"
                      >
                        Two Factor Code
                      </label>
                      <FormControl>
                        <Input
                          className="py-5 bg-white focus:shadow-black"
                          disabled={isPending}
                          {...field}
                          placeholder="Enter your code"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        style={GeistSans.style}
                        className="text-sm text-white"
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
                        style={GeistSans.style}
                        className="text-sm text-white"
                      >
                        Password
                      </label>
                      <FormControl>
                        <Input
                          className="py-5 bg-white focus:shadow-black"
                          disabled={isPending}
                          {...field}
                          placeholder="Enter your password"
                          type="password"
                        />
                      </FormControl>
                      <button className="text-sm text-white pt-2 ">
                        <Link href={"/auth/reset"}>Forgot password?</Link>
                      </button>
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <ShimmerButton
            disabled={isPending}
            type="submit"
            background="#241A3E"
            className={`w-full shadow-2xl text-white text-sm font-medium h-[42px] ${
              isPending ? "opacity-50 cursor-no-drop" : ""
            }`}
          >
            {showTwoFactor ? "Confirm" : "Log in"}
          </ShimmerButton>
        </form>
      </Form>
    </CardWrapper>
  );
};
