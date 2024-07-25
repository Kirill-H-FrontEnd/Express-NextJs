import { LoginForm } from "@/components/auth/login-form";
import { Suspense } from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Express | Sign In",
  description: "This is a login page Express.",
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
