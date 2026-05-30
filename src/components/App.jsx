import React from "react";
import blog from "../data/blog";

import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import "../index.css"; 

function App() {
  return (
    <div className="App">
      {/* If blog.header exists, use title. Otherwise, fall back to blog.name */}
      <Header name={blog.header?.title || blog.name} />
      
      {/* Fallbacks for the avatar image and the bio paragraph text */}
      <About 
        image={blog.about?.avatar || blog.image} 
        about={blog.about?.bio || blog.about} 
      />
      
      {/* Fallback to pass whichever array exists down to the list */}
      <ArticleList posts={blog.articles || blog.posts} />
    </div>
  );
}

export default App;