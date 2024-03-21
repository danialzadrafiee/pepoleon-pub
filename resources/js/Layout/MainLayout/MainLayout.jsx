import Menu from "@/Components/Menu/Menu";
import { router } from "@inertiajs/react";
import { useEffect } from "react";
import { useAccount } from "wagmi";
const MainLayout = ({ children }) => {
  const { address } = useAccount();
  useEffect(() => {
    if (!address) {
      if (route().current() !== ".index") router.get(route(".index"));
    }
    if (address) {
      if (route().current() !== "dashboard.index") router.get(route("dashboard.index"));
    }
  }, [address]);
  return (
    <>
      {children}
      <Menu />
    </>
  );
};
export default MainLayout;
