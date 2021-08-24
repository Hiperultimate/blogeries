import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleBg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
        alt=""
      />
    </div>
  );
}

export default Header;
