/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import "./AdminArticle.css";
import connexion from "../../services/connexion";

const articleType = {
  title: "",
  description: "",
  content: "",
  image_src: "",
  image_alt: "",
  author_id: null,
};

function AdminArticle() {
  const [article, setArticle] = useState(articleType);
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    try {
      const myAuthors = await connexion.get("/author").then((res) => res.data);
      setAuthors(myAuthors);
      // eslint-disable-next-line no-restricted-syntax
      console.log(myAuthors);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAuthors();
  }, []);

  const handleArticle = (event) => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(event);
    setArticle((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const postArticle = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-restricted-syntax
    console.log(article);
    try {
      await connexion.post("/article", article);
    } catch (error) {
      // eslint-disable-next-line no-restricted-syntax
      console.log(error);
    }
  };

  return (
    <div>
      {console.log(article)}
      <h1>Administration d'un article</h1>
      <form onSubmit={postArticle}>
        Ajout d'un article
        <label>
          Title
          <input
            type="text"
            name="title"
            required
            value={article.title}
            onChange={handleArticle}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            required
            value={article.description}
            onChange={handleArticle}
          />
        </label>
        <label>
          Content
          <textarea
            name="content"
            required
            value={article.content}
            onChange={handleArticle}
          />
        </label>
        <label>
          Image URL
          <input
            type="url"
            required
            name="image_src"
            value={article.image_src}
            onChange={handleArticle}
          />
        </label>
        <label>
          Image Alt
          <input
            type="text"
            name="image_alt"
            required
            value={article.image_alt}
            onChange={handleArticle}
          />
        </label>
        <label>
          Author ID
          <select name="author_id" onChange={handleArticle} required>
            <option value={null}>Votre choix</option>
            {authors.map((author) => (
              <option value={author.id}>
                {author.firstname} {author.lastname}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AdminArticle;
