import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import FAQ from "../pages/FAQ";

function Applayout() {
  const path = useLocation().pathname;

  return (
    <div className="mx-36 mb-40">
      <Navbar />
      <main className="mx-8">
        <Outlet />
      </main>
      {path !== "/faq" ? <FAQ /> : ""}
    </div>
  );
}

export default Applayout;
