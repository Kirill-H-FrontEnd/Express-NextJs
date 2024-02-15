"use client";
// > Zod
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// > React
import { FC, useState } from "react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
// > Schemas
import { LoginSchema } from "@/schemas/";
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
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
// > Actions
import { login } from "@/actions/login";

export const LoginForm: FC = ({}) => {
  const [error, setError] = useState<string | undefined>("");
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
      login(values).then((data: any) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
  return (
    <CardWrapper
      headerTitle="Welcome back!"
      headerLabel="Please enter tour details to sign in."
      backButtonLabel="Don`t have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="my-4 grid gap-3">
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="py-5"
                      disabled={isPending}
                      {...field}
                      placeholder="Enter your password"
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
          <Button
            disabled={isPending}
            size={"lg"}
            type="submit"
            className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet to-black hover:shadow-lg transition-shadow
            "
          >
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
