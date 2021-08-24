import React from "react";

import Header from "../../components/header/Header.jsx";
import Posts from "../../components/posts/Posts.jsx";
import Sidebar from "../../components/sidebar/SideBar.jsx";

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
