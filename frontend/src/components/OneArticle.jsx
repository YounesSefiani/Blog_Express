import React from "react";
import { useLoaderData } from "react-router-dom";

function OneArticle() {
  const article = useLoaderData();
  return (
    <div>
      <h1>{article.title}</h1>
      <h2>{article.description}</h2>
      <img src={article.image_src} alt={article.image_alt} />
      <p>{article.content}</p>
      <h3>{article.created_at}</h3>
      <h3>{article.fullname}</h3>
    </div>
  );
}

export default OneArticle;
