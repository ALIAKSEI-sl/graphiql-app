import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main style={{ overflow: "hidden" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
