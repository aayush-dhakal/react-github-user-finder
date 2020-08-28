import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";

import { GithubContext } from "../../context/GithubContext";

const Search = () => {
  const { searchUsers, setAlert, users, setUsers } = useContext(GithubContext);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") return setAlert("Please enter the name first");
    searchUsers(text);
    setText("");
    setAlert(null);
  };

  return (
    <Form onSubmit={onSubmit} style={form}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Search Users..."
        />
      </Form.Group>

      <Button variant="dark" type="submit" block>
        Submit
      </Button>

      {users.length > 0 && (
        <Button variant="danger" block onClick={()=>setUsers([])}>
          Clear
        </Button>
      )}
    </Form>
  );
};

const form = {
  margin: "1rem 0",
};

export default Search;
