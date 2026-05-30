import React from "react";

function Header({ title, subtitle }) {
  return (
    <header className="site-header">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </header>
  );
}

export default Header;
