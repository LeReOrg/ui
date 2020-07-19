import React from "react";
import Search from "../Search/Search"

const SlideBackground = () => {
 
  return(
  <div id="slide-background" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li
        data-target="#slide-background"
        data-slide-to="0"
        className="active"
      ></li>
      <li data-target="#slide-background" data-slide-to="1"></li>
      <li data-target="#slide-background" data-slide-to="2"></li>
    </ol>
    
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={require("../../../assets/img/background/background1.png")}
          className="d-block w-100 img-fluid img-background"
          alt="..."
        
        />
      </div>
      <div className="carousel-item">
        <img
          src={require("../../../assets/img/background/featured_home.jpg")}
          className="d-block w-100 img-fluid img-background"
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img
          src={require("../../../assets/img/background/featured_home_2.jpg")}
          className="d-block w-100 img-fluid img-background"
          alt="..."
         
        />
      </div>
    </div>
    <Search />
  </div>
)};

export default SlideBackground;
