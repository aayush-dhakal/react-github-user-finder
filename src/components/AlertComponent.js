import React, { useContext } from "react";
import { GithubContext } from "../context/GithubContext";
import { Alert } from "react-bootstrap";

const AlertComponent = () => {
  const { alert } = useContext(GithubContext);
  return (
    alert !== null && (
      <Alert variant="danger" className="mt-2">
        {alert}
      </Alert>
    )
  );
};

export default AlertComponent;
