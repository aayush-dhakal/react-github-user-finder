import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../../context/GithubContext";
import Loading from "../Loading";
import { Button, Container, Row, Col, Card, Badge } from "react-bootstrap";
import Repos from "../Repos/Repos";

const UserDetail = (props) => {
  const { loading, getUser, user, getUserRepos } = useContext(GithubContext);
  const {
    hireable,
    login,
    avatar_url,
    location,
    bio,
    html_url,
    name,
    company,
    blog,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  useEffect(() => {
    // in app.js we passed a path props for UserDetail component where there was /users/:login path. Now to get the exact login's value we used props.match.params.login

    getUser(props.match.params.login);
    getUserRepos(props.match.params.login);

    // if you are using getUser outside of useEffect you can disable the rule using // eslint-disable-next-line react-hooks/exhaustive-deps otherwise you can move the method inside of useEffect
    // this is basically to stop the missing dependencies warning

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // if you dont use [] here then the useEffect hook will run for the first time the component mounts and also every time when the state is updated. So it will go in kinda loop of infinite fetching of user coz there is getUser function which(functionality defined in context file) updates the state(of user and even loading) and if the state is updated then useEffect will again run and hence will go in a loop. So using [] allows this useEffect to run only once when the component is first rendered(or mounted) on the screen

  return loading ? (
    <Loading />
  ) : (
    <div className="container mt-2">
      <Link to="/" className="mr-3">
        <Button variant="secondary">Back To Search</Button>
      </Link>
      Hireable:{"  "} {/* this will give space between the text & the icon */}
      {hireable ? (
        <i className="fas fa-check text-success"></i>
      ) : (
        <i className="fas fa-times text-danger"></i>
      )}
      <Container className="border mt-3">
        <Row>
          <Col className="p-0">
            <Card className="text-center border-0">
              <Card.Img
                variant="top"
                src={avatar_url}
                className="rounded-circle mx-auto d-block mt-1"
                style={{ width: "150px", display: "block" }}
              />
              <Card.Body className="p-1">
                <Card.Title>{name}</Card.Title>
                {location && <Card.Text>Location: {location}</Card.Text>}
              </Card.Body>
            </Card>
          </Col>

          <Col>
            {bio && (
              <>
                <p className="font-weight-bold mb-2 mt-1">Bio:</p>
                <p className="mb-0">{bio}</p>
              </>
            )}

            {/* for external link use anchor tag but not Link */}
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              <Button variant="dark" className="mb-3 mt-3">
                Visit Github Profile
              </Button>
            </a>

            <p className="mb-0">Username: {login}</p>

            {company && <p className="mb-0">Company: {company}</p>}

            {blog && <p className="mb-2">Website: {blog}</p>}
          </Col>
        </Row>
      </Container>
      <div className="border mt-3 p-2 text-center">
        <Badge className="mr-2" variant="primary">
          Followers: {followers}
        </Badge>
        <Badge className="mr-2" variant="secondary">
          Following: {following}
        </Badge>
        <Badge className="mr-2" variant="success">
          Public Repos: {public_repos}
        </Badge>
        <Badge className="mr-2" variant="danger">
          Public Gists:{public_gists}
        </Badge>
      </div>
      <p className="mt-2 font-weight-bold">Latest Repos:</p>
      Click to visit{" "}
      <span role="img" aria-label="smiley">
        &#128512;
      </span>{" "}
      {/* this span thing is react recommended. search in google for detail */}
      <Repos />
    </div>
  );
};

export default UserDetail;
