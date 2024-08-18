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
import Link from "next/link";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { CardWrapper } from "./card-wrapper";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
// > Actions
import { login } from "@/actions/login";

export const LoginForm: FC = ({}) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
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
      login(values, callbackUrl)
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
        .catch(() => "");
    });
  };
  return (
    <CardWrapper
      headerTitle={`${
        showTwoFactor ? "Enter your OTP code" : "Welcome to Express, login with"
      }`}
      headerLabel={`${
        showTwoFactor
          ? "We sent OTP code to your email."
          : "Don`t have an account?"
      }`}
      backButtonLabel="Sign Up."
      backButtonHref="/auth/register"
      showSocial
      contentPrivacy={
        <>
          <p className="text-xs text-gray-600 text-center leading-5">
            By sign in, you agree to our{" "}
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
          <div
            className={`my-4 grid gap-3 ${
              showTwoFactor ? "justify-center" : ""
            }`}
          >
            {showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem className="justify-center text-center">
                      <FormControl>
                        <InputOTP
                          {...field}
                          maxLength={6}
                          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
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
                        style={inter.style}
                        className="text-sm text-white font-normal"
                      >
                        Email
                      </label>
                      <FormControl>
                        <Input
                          className="py-5 bg-white focus:shadow-black "
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
