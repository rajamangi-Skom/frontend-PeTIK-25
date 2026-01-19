import "./App.css";
import posts from "./posts.json";
import Article from "./components/Article/Article";
import Counter from "./components/Counter/Counter";
import LifeCycle from "./components/Lifecycle/Lifecycle";

function App() {
  return (
    <>
      <Article posts={posts} />
      <h3>Top Author</h3>
      <ol>
        {posts.map((post, index) => {
          return <li key={index}>{post.author}</li>;
        })}
      </ol>
      <button onClick={() => alert("Hello Rebit🐇")}>Click me!</button>
      <Counter />
      <LifeCycle />
    </>
  );
}

export default App;
