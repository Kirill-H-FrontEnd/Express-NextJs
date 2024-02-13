import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Protocol | Sign In",
  description: "Protocol is a web Framework",
};
const LoginPage = ({}) => {
  return <LoginForm />;
};
export default LoginPage;
