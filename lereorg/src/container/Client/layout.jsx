import React from "react";
import Header from "../../components/Client/Header/Header";
import Footer from "../../components/Client/Footer/Footer";
import SlideBackground from "../../components/Client/SlideBackground/SlideBackground";
import Home from "../../components/Client/Home/Home"
const Layout = (props) => {
  return (
    <div>
    <Header />
      <div className="page_container">
        <SlideBackground />
        
      </div>
      <Home />
      <Footer />
    </div>
      
  );
};
export default Layout;
