import React from "react";

function About({ name, bio, avatar }) {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={avatar} alt={name} className="avatar" />
        <div>
          <h3>{name}</h3>
          <p>{bio}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
