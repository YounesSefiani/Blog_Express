import { useLoaderData } from "react-router-dom";

import Article from "./components/Article";
import "./App.css";

function App() {
  const articles = useLoaderData();
  return (
    <div className="App">
      <h1>Mes articles</h1>
      <main className="container">
        {articles.map((article) => (
          <Article article={article} />
        ))}
      </main>
    </div>
  );
}

export default App;
