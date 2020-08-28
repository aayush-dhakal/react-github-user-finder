import React, { createContext, useState } from "react";
import axios from "axios";

export const GithubContext = createContext();

const GithubContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    if (res.data.items.length === 0) {
      setAlert(`${text} user not found`);
      setLoading(false);
    }
    setUsers(res.data.items);
    setLoading(false);
  };

  // get a specific user from username
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}`);

    setUser(res.data);
    setLoading(false);
  };

  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );

    setRepos(res.data);
    setLoading(false);
  };

  return (
    <div>
      <GithubContext.Provider
        value={{
          users,
          user,
          loading,
          alert,
          repos,
          setAlert,
          searchUsers,
          getUser,
          getUserRepos,
          setUsers
        }}
      >
        {props.children}
      </GithubContext.Provider>
    </div>
  );
};

export default GithubContextProvider;
