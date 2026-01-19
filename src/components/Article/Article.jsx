import { useState } from "react";

const Article = ({ posts = [] }) => {
  // state ada 3 bagian
  // 1.wadahnya
  // 2.variable yang mengubah nilai dalam wadah
  // 3.nilai default
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // search digunakn sebagai wadah pengumpul data
  // setSearch digunakan sebagai tolss yang mengupdate wadah search melalui inputan user
  // useState(""); yaitu value default dari wadah search
  const [search, setSearch] = useState("");
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const cariKata = posts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      Cari artikel : <input type="text" onChange={handleChangeSearch} />
      <br />
      <small>
        Ditemukan <strong>{cariKata.length}</strong> data dengan pencarian kata{" "}
        <strong>{search}</strong>
      </small>
      {cariKata.map((post, index) => {
        return (
          <div key={index}>
            <h3>{post.title}</h3>
            <small>
              {post.author} - Date: {post.date}, tags: {post.tags}
            </small>
          </div>
        );
      })}
    </div>
  );
};

export default Article;
