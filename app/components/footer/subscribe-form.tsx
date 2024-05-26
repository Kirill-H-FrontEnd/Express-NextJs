// > Utils
import { cn } from "@/lib/utils";
// > Zod
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// > Components
import GridPattern from "@/components/magicui/bg/grid-pattern";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import ShimmerButton from "@/components/magicui/shimmer-button";
// > React
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
// > Schemas
import { SubscribeSchema } from "@/schemas";
// > Font
import { GeistSans } from "geist/font/sans";
export function SubscribeForm({ className }: React.ComponentProps<"form">) {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending] = useTransition();
  const form = useForm<z.infer<typeof SubscribeSchema>>({
    resolver: zodResolver(SubscribeSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const onSubmit = (values: z.infer<typeof SubscribeSchema>) => {
    setError("");
    setSuccess("");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full h-full z-[10]"
      >
        <div className=" my-4 grid gap-3  ">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <label style={GeistSans.style} className="text-white text-sm">
                  Name
                </label>
                <FormControl>
                  <Input
                    className="py-5 rounded-full text-white "
                    disabled={isPending}
                    {...field}
                    placeholder="Enter your name:"
                    type="text"
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
                <label style={GeistSans.style} className="text-white text-sm">
                  Email
                </label>
                <FormControl>
                  <Input
                    className="py-5 rounded-full text-white "
                    disabled={isPending}
                    {...field}
                    placeholder="Enter your email:"
                    type="email"
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
          shimmerSize="0.08em"
          type="submit"
          disabled={isPending}
          background="#241A3E"
          className="w-full shadow-2xl text-sm font-medium h-[42px]"
        >
          Get Started
        </ShimmerButton>
      </form>
      {/* /* BG */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"8 4"}
        className={cn(
          "[mask-image:radial-gradient(280px_circle_at_center,white,transparent)]"
        )}
      />
    </Form>
  );
}
