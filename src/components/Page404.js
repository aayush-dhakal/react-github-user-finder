import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Page404 = () => {
  return (
    <div className="container">
      <Button>
        <Link to="/" className="home-link">
          Return to home
        </Link>
      </Button>
      <NotFoundPage>
        <p>404</p>
        <p>Page not found</p>
      </NotFoundPage>
    </div>
  );
};

// styled component name has to be in uppercase
const NotFoundPage = styled.div`
  height: 40vh;
  font-size: 8rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  background: #ba2929;
  padding: 0.4rem;
  margin-top: 1rem;
  border: none;
  transition: transform .2s ease-in-out;

  &:hover {
    background: #570011;
    transform: scale(1.1);
  }

  .home-link {
    color: white;

    &:hover {
      text-decoration: none;
    }
  }
`;

export default Page404;
