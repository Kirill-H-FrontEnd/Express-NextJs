import { RegisterForm } from "@/components/auth/register-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Protocol | Sign Up",
  description: "Protocol is a web Framework",
};
const RegisterPage = ({}) => {
  return <RegisterForm />;
};
export default RegisterPage;
