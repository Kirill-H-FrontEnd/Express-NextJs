import { Suspense } from "react";
// > Components
import { NewVerificationForm } from "@/components/auth/new-verification-form";

const NewVerificationPage = () => {
  return (
    <>
      <Suspense fallback={<div className="text-white">loading</div>}>
        <NewVerificationForm />
      </Suspense>
    </>
  );
};

export default NewVerificationPage;
