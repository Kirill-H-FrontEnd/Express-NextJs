import { RegisterForm } from "@/components/auth/register-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Express | Sign Up",
  description: "This is a register page Express.",
};
const RegisterPage = ({}) => {
  return <RegisterForm />;
};
export default RegisterPage;
