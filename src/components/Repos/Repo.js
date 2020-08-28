import React from "react";
import "./Repo.css"

const Repo = ({ repo }) => {
  return (
      <div className="border p-3" style={{margin:'13px 0 13px 0'}}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
      </div>
  );
};

export default Repo;
