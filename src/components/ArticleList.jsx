import React from "react";
import Article from "./Article";

function ArticleList({ posts = [] }) { 
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.summary} // Changed post.preview to post.summary to match your data file!
        />
      ))}
    </main>
  );
}

export default ArticleList;