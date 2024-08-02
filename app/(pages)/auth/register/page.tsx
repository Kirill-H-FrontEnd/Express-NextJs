// > Components
import { RegisterForm } from "@/components/auth/register-form";
// > Next
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Express.ts | Sign Up",
  description: "This is a register page of Express.ts.",
};
const RegisterPage = ({}) => {
  return <RegisterForm />;
};
export default RegisterPage;
