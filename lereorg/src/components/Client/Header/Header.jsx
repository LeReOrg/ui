import React,{useState,useEffect} from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNav from "./HeaderNav/HeaderNav";
import SlideBackground from "../SlideBackground/SlideBackground";
import { withRouter } from "react-router-dom";


const Header = (props) => {
  const [scroll,setScroll] = useState(false);
  useEffect(() =>{
    window.addEventListener('scroll',() =>{
      setScroll(true)
    })
    window.onscroll = function (){
      var doc = document.documentElement;
      if(doc.scrollTop === 0){
        setScroll(false)
      }
    }
    let header = document.querySelector('#header');
    if(props.history.location.pathname === "/"){
      let background=document.querySelector('#background').offsetHeight +'px';
      header.style.height= background;
    }else{
      let header_fixed = document.querySelector('#header_fixed').offsetHeight + 'px';
      header.style.height= header_fixed;
      
    }
    
  },[]);
  return (
    <header id="header">
      <div className={`header  ${scroll ? "header-scroll" : ""} `} id='header_fixed' >
        <HeaderLogo scroll={scroll} />
        <HeaderNav scroll={scroll} />
      </div>
      {props.history.location.pathname === "/" ?  <SlideBackground /> : null}
     
    </header>       
      
  );
};

export default withRouter(Header) ;
