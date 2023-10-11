import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "../UI/SideMenu";

const RootLayout = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token, navigate]);

  return (
    <div className="flex w-screen h-screen">
      <SideMenu />
      <section className="flex-1">
        <header>This will be header</header>
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default RootLayout;
