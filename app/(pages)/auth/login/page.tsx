import { LoginForm } from "@/components/auth/login-form";
import { Suspense } from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Protocol | Sign In",
  description: "Protocol is a web Framework",
};
const LoginPage = ({}) => {
  return (
    <>
      <Suspense fallback={<div className="text-white">loading</div>}>
        <LoginForm />
      </Suspense>
      ;
    </>
  );
};
export default LoginPage;
