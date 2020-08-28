import React from "react";

const About = () => {
  return (
    <div className="container" style={about}>
      Github user finder app using Github API
      <p style={version}>Version 1.0</p>
    </div>
  );
};

const about = {
  fontSize: "1.5rem",
  marginTop: "1rem",
};

const version = {
  fontSize: "1.2rem",
  color: "#9e394d",
};

export default About;
