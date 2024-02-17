import { auth, signOut } from "@/auth";

const DashboardPage = async ({}) => {
  const session = await auth();

  return <>Main</>;
};
export default DashboardPage;
