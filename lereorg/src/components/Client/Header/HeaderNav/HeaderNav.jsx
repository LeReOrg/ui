import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = (props) => {
  return (
    <div className="header-contain">
      <div className="header-nav">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" style={{ alignItems: "center" }}>
              <li className="nav-item">
                <Link className={`nav-link ${props.scroll ? "black-color" : ""}`} to="/about">
                  Liên hệ
                </Link>
              </li>
              <li
                className="nav-item"
                style={{
                  display: "flex",
                  paddingLeft: "56px",
                }}
              >
                <Link className={`nav-link ${props.scroll ? "black-color" : ""}`} to="/login">
                  Đăng nhập
                </Link>
              </li>
              <li
                className="nav-item"
                style={{
                  display: "flex",

                  paddingLeft: "56px",
                  paddingRight: "56px",
                }}
              >
                <Link className={`nav-link ${props.scroll ? "black-color" : ""}`} to="/register">
                  Đăng ký
                </Link>
              </li>
              <li
                className="nav-item"
                style={{
                  display: "flex",
                  backgroundColor: "#2FAF62",
                  borderRadius: "4px",
                  padding: "9px 16px",
                }}
              >
                <Link className="nav-link" to="/register">
                  Đăng sản phẩm
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
