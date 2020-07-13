import React from "react";
const Layout = (props) => {
  return (
    <>
      <div className="page_container">{props.children}</div>
    </>
  );
};
export default Layout;
