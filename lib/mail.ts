import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendSubscribeEmail = async (email: string, name: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "horushevskiykirill@gmail.com",
    subject: "Subscribe",
    html: ` ${name} ${email}`,
  });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2FA Code",
    html: `Your 2FA code: ${token}`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Change password",
    html: `<p><a href="${resetLink}">Reset pass</a></p>`,
  });
};

export const sendVerificationEmail = async (
  email: string,
  token: string,
  name?: string
) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verification ",
    html: `<p><a href="${confirmLink}">click</a></p> Name:${name}`,
  });
};
