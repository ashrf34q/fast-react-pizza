import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import SpinLoader from "./SpinLoader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(navigation);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <SpinLoader />}
      <Header />

      <div className="mt-10 overflow-y-scroll">
        <main className="max-w-3x mx-auto">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
