import React from "react";
import Footer from "../components/Client/Footer/Footer";
import Header from "../components/Client/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export const getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default MainLayout;
