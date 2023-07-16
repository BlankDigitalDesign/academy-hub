import { Outlet } from "react-router-dom";

// components
import Navbar from "../screens/Navbar";
import Footer from "../screens/Footer";

export default function Boilerplate() {
  return (
    <section className="boilerplate">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}
