import React from "react";

const HeaderLogo = React.memo((props) => (
  <div className="header-wrap-logo">
    <div className="header-logo"></div>
    <div className={`header-logo-title ${props.scroll ? "header-contain-scroll" : ''} `}><p>Hichi kachi</p></div>
  </div>
));

export default HeaderLogo;
