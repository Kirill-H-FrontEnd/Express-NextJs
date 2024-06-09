"use server";
import * as z from "zod";
import { SubscribeSchema } from "@/schemas";
import { sendSubscribeEmail } from "@/lib/mail";

export const subscribe = async (values: z.infer<typeof SubscribeSchema>) => {
  const validateFields = SubscribeSchema.safeParse(values);

  const { email, name } = validateFields.data;

  if (validateFields) {
    sendSubscribeEmail(email, name);
    return { success: "Subscription email sent!" };
  }
};
