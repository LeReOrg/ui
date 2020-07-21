import React from "react";
import Header from "../../components/Client/Header/Header";
import Footer from "../../components/Client/Footer/Footer";
const Layout = (props) => {
  return (
    <>
    <Header  />
      <div className="page_container">
        {props.children}
      </div>
      <Footer />
    </>
      
  );
};
export default  Layout;
