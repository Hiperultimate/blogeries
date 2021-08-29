import React, {useState, useEffect} from "react";

import Header from "../../components/header/Header.jsx";
import Posts from "../../components/posts/Posts.jsx";
import Sidebar from "../../components/sidebar/SideBar.jsx";
import axios from "axios";

import "./home.css";

function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async ()=> {
      const res = await axios.get("/posts") // In order to use this setup proxy in package.json file like this ("proxy" : "http://localhost:5000/api/")
      setPosts(res.data);
    }
    fetchPosts();
  }, [])  // The [] means fire the useEffect at the beginning of function render


  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
