import React, { useState, useEffect } from "react";

import Header from "../../components/header/Header.jsx";
import Posts from "../../components/posts/Posts.jsx";
import Sidebar from "../../components/sidebar/SideBar.jsx";
import { useLocation } from "react-router";
import axios from "axios";

import "./home.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const { search } = location;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search); // In order to use this setup proxy in package.json file like this ("proxy" : "http://localhost:5000/api/")
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]); // The [] means fire the useEffect at the beginning of function render
                // But if we set it to like [search] then it will fire the useEffect whenever the item inside the [] is changed

  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
