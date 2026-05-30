import React from "react";
import Article from "./Article";

function ArticleList({ articles }) {
  return (
    <section className="article-list">
      <h2>Articles</h2>
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          author={article.author}
          summary={article.summary}
        />
      ))}
    </section>
  );
}

export default ArticleList;
