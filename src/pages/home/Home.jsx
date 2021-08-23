import React from "react";

import Header from "../../header/Header.jsx";
import Posts from "../../posts/Posts.jsx";
import Sidebar from "../../sidebar/SideBar.jsx";

import "./home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
