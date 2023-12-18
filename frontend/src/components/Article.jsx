import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Article({ article }) {
  return (
    <Link to={`/articles/${article.id}`}>
      <article>
        <h2>{article.title}</h2>
        <h3>{article.description}</h3>
      </article>
      <button type="button">En savoir plus</button>
    </Link>
  );
}

Article.propTypes = {
  article: PropTypes.shape().isRequired,
};

export default Article;
