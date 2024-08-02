import { Suspense } from "react";
// > Components
import { NewPasswordForm } from "@/components/auth/new-password-form";
// > Next
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Express.ts | Create new password",
  description: "This is a change password page of Express.ts.",
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
