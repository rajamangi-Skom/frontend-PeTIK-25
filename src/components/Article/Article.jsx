import { useState } from "react";
import Search from "../Search/Search";

const Article = ({ posts = [] }) => {
  const [filteredPost, setFilteredPost] = useState(posts);
  const [postTotal, setPostTotal] = useState(posts.length);

  const onChangeSearch = (searchTerm) => {
    const filteredData = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredPost(filteredData);
    setPostTotal(filteredData.length);
  };

  return (
    <div>
      <Search totalPost={postTotal} onSearchChange={onChangeSearch} />
      {filteredPost.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <small>
            {post.author} - Date: {post.date}, tags: {post.tags}
          </small>
        </div>
      ))}
    </div>
  );
};

export default Article;
// state ada 3 bagian
// 1.wadahnya
// 2.variable yang mengubah nilai dalam wadah
// 3.nilai default
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// search digunakn sebagai wadah pengumpul data
// setSearch digunakan sebagai tolss yang mengupdate wadah search melalui inputan user
// useState(""); yaitu value default dari wadah search
