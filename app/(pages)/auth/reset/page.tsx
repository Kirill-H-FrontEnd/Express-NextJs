import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Protocol | Reset password",
  description: "Protocol is a web Framework",
};
const ResetPasswordPage = ({}) => {
  return <ResetPasswordForm />;
};
export default ResetPasswordPage;
