import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const CardMovie = ({ item }) => {
  const containerCardStyle = {
    margin: "10px 0",
  };
  const cardStyle = {
    borderRadius: "10px",
  }
  const cardImgStyle = {
    width: "200px",
    margin: "0 auto",
  };
  return (
    <Col md={3} style={containerCardStyle}>
      <Card style={cardStyle}>
        <CardImg
          top
          src={item.Poster}
          style={cardImgStyle}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{item.Title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {item.Year}
          </CardSubtitle>
          <CardText>{item.imdbID}</CardText>
          <Button>See Details</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardMovie;
