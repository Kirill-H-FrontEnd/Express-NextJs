"use client";
// > Zod
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// > React
import { FC, useState } from "react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
// > Font
import { GeistSans } from "geist/font/sans";
// > Schemas
import { NewPasswordSchema } from "@/schemas/";
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
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/new-password";
// > Next
import { useRouter } from "next/navigation";
export const NewPasswordForm: FC = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      newPassword(values, token).then((data: any) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
  if (success) {
    setTimeout(() => {
      router.push("/auth/login");
    }, 1000);
  }
  return (
    <CardWrapper
      headerTitle="Create new password"
      headerLabel="Create a new password for your account."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="my-4 grid gap-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <label style={GeistSans.style} className="text-sm text-white">
                    Create new password
                  </label>
                  <FormControl>
                    <Input
                      className="py-5 bg-white focus:shadow-black"
                      disabled={isPending}
                      {...field}
                      placeholder="Enter new password"
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
            background="#241A3E"
            className={`w-full shadow-2xl text-white text-sm font-medium h-[42px] ${
              isPending ? "opacity-50 cursor-no-drop" : ""
            }`}
          >
            {isPending ? "Changing..." : "Change password"}
          </ShimmerButton>
        </form>
      </Form>
    </CardWrapper>
  );
};
