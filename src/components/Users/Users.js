import React, { useContext } from "react";
import { CardColumns } from "react-bootstrap";
import { GithubContext } from "../../context/GithubContext";
import User from "./User";
import Loading from "../Loading";

const Users = () => {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <CardColumns>
        {users.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </CardColumns>
    );
  }
};

export default Users;
