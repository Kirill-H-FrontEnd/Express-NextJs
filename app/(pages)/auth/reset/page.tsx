import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Express | Reset password",
  description: "This is a reset password page of Express.ts.",
};
const ResetPasswordPage = ({}) => {
  return <ResetPasswordForm />;
};
export default ResetPasswordPage;
