import { auth, signOut } from "@/auth";

const DashboardPage = async ({}) => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Out</button>
      </form>
    </div>
  );
};
export default DashboardPage;
