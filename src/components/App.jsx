import React from "react";
import blog from "../data/blog";

import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList.js";
import "./assets/index.css";

function App() {
  return (
    <div className="app">
      <Header
        title={blog.header.title}
        subtitle={blog.header.subtitle}
      />
      <main className="main-content">
        <About
          name={blog.about.name}
          bio={blog.about.bio}
          avatar={blog.about.avatar}
        />
        <ArticleList articles={blog.articles} />
      </main>
      <footer className="site-footer">
        <p>&copy; 2026 {blog.about.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
