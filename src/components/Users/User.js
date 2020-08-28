import React from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./User.css";

const User = ({ user }) => {
  return (
    <Card className="my-card bg-light mb-3 mt-3">
      <Card.Img
        variant="top"
        src={user.avatar_url}
        className="card-img rounded-circle"
      />
      <Card.Body>
        <Card.Title className="card-username">{user.login}</Card.Title>

        <LinkContainer to={`/user/${user.login}`}>
          <Button variant="dark" className="card-button">
            More
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default User;
