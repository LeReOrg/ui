import React,{useState,useEffect} from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNav from "./HeaderNav/HeaderNav";


const Header = () => {
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
  },[]);
  return (
    <header className={scroll ? "header-scroll" : ""}>  
        <HeaderLogo scroll={scroll} />
        <HeaderNav scroll={scroll} />
     
    </header>
    
  );
};

export default Header;
