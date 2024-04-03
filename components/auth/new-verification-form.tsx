"use client";
import { newVerification } from "@/actions/new-verification";
import { useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
type TNewVerificationForm = {};

export const NewVerificationForm: FC = ({}) => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch((e) => {
        setError("Something went wrong!");
      });
  }, [token]);
  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <section className={""}>
      <div className="container">
        <section>
          {!success && !error && <h1>loading</h1>}
          <FormError message={error} />
          <FormSuccess message={success} />
        </section>
      </div>
    </section>
  );
};
