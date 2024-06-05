"use client";
import { newVerification } from "@/actions/new-verification";
import { useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { CardWrapper } from "./card-wrapper";
import { Spinner } from "@nextui-org/spinner";
type TNewVerificationForm = {};

export const NewVerificationForm: FC = ({}) => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <>
      <CardWrapper
        headerTitle="Verification "
        headerLabel="Confirm your verification."
        backButtonLabel="Log in."
        backButtonHref="/auth/login"
      >
        <section className={""}>
          <div className="container">
            <section>
              {!success && !error && (
                <div className="w-full text-center py-4">
                  <Spinner color="white" />
                </div>
              )}
              <div className="mt-4">
                {!success && <FormError message={error} />}
                <FormSuccess message={success} />
              </div>
            </section>
          </div>
        </section>
      </CardWrapper>
    </>
  );
};
