import { Suspense } from "react";
// > Components
import { LoginForm } from "@/components/auth/login-form";
// > Next
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Express.ts | Sign In",
  description: "This is a login page of Express.ts.",
};
const LoginPage = ({}) => {
  return (
    <>
      <Suspense fallback={""}>
        <LoginForm />;
      </Suspense>
    </>
  );
};
export default LoginPage;
