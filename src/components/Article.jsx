import React from "react";

function Article({ title, date, author, summary }) {
  return (
    <article className="article">
      <h3>{title}</h3>
      <div className="article-meta">
        <span>{date}</span> &bull; <span>{author}</span>
      </div>
      <p>{summary}</p>
    </article>
  );
}

export default Article;
