import { NewPasswordForm } from "@/components/auth/new-password-form";
import { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Protocol | Sign In",
  description: "Protocol is a web Framework",
};
const NewPasswordPage = ({}) => {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <NewPasswordForm />
      </Suspense>
    </>
  );
};
export default NewPasswordPage;
