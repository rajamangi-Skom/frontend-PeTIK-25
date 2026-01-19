import React from "react";
import Article from "../../Article/Article.jsx";
import posts from "../../../posts.json";
import Navbar from "../../Navbar/Navbar.jsx";

function Blogs() {
  return (
    <div>
      <Navbar />
      <h1>Daftar Artikel</h1>
      <Article posts={posts} />
    </div>
  );
}

export default Blogs;
