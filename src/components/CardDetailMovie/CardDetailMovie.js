import React from "react";
import { Jumbotron, Col } from "reactstrap";

const CardDetailMovie = ({ item }) => {
  return (
    <Col md={12}>
      <Jumbotron data-testid="jumbotron">
        <img alt="jumbo-poster" src={item.Poster}></img>
        <h2>{item.Title}</h2>
        <p className="lead">{item.Year}</p>
        <hr className="my-2" />
        <p>
          {item.Type}
          <span style={{ margin: "0 10px" }}>{item.imdbID}</span>
        </p>
      </Jumbotron>
    </Col>
  );
};

export default CardDetailMovie;
