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
import { Button } from "@nextui-org/react";
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
        className="w-full h-full relative z-[10]"
      >
        <div className=" my-4 grid gap-3  pb-3">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <label style={GeistSans.style} className="text-white text-sm">
                  Name
                </label>
                <FormControl>
                  <Input
                    className="py-5 rounded-full text-black bg-white"
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
                    className="py-5 rounded-full text-black bg-white"
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
        <Button
          type="submit"
          className="w-full rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#241A3E] to-zinc-950 text-white shadow-md shadow-zinc-950 h-[42px]"
        >
          Subscribe
        </Button>
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
