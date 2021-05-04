import React from "react";
import { Link } from "react-router-dom";
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

const CardMovie = ({ item, setShow, setSrc, id, columnCount }) => {
  const containerCardStyle = {
    margin: "10px 0",
  };
  const cardStyle = {
    borderRadius: "10px",
  };
  const cardImgStyle = {
    width: "200px",
    margin: "0 auto",
    cursor: "pointer",
  };
  return (
    <Col md={columnCount} style={containerCardStyle}>
      <Card style={cardStyle}>
        <CardImg
          top
          src={item.Poster}
          style={cardImgStyle}
          alt="Card image cap"
          onClick={() => {
            setShow(true);
            setSrc(item.Poster);
          }}
        />
        <CardBody>
          <CardTitle tag="h5">{item.Title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {item.Year}
          </CardSubtitle>
          <CardText>{item.imdbID}</CardText>
          <Link to={`/detail-movie/${id}`}>
            <Button color="info">See Details</Button>
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardMovie;
