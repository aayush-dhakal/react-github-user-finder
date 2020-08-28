import React, { useContext } from "react";
import { GithubContext } from "../../context/GithubContext";
import Repo from "./Repo";

const Repos = () => {
  const { repos } = useContext(GithubContext);
  return repos.map((repo) => <Repo repo={repo} key={repo.id} />);
};

export default Repos;
