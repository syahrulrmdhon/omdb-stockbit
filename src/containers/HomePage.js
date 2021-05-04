import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "reactstrap";
import "./HomePage.scss";
import { getListHome } from "../actions/listHomeAction";
import CardMovie from "../components/CardMovie";
import ModalImage from "../components/ModalImage";

const HomePage = () => {
  const dispatch = useDispatch();
  const homeList = useSelector((state) => state.listHome);
  const [page, setPage] = useState(1);
  const [keywords, setKeywords] = useState("batman");
  const [showAnswers, setShowAnswers] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [srcImg, setSrcImg] = useState("");
  const loader = useRef(null);

  const fetchHome = (params) => {
    dispatch(getListHome(params));
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage(page + 1);
  };

  useEffect(() => {
    fetchHome({ page, search: keywords });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [keywords, page]);

  return (
    <React.Fragment>
      <h1>Movie Search</h1>
      <Button
        className="btn-show-answer"
        color="primary"
        onClick={() => setShowAnswers(!showAnswers)}
      >
        {!showAnswers ? "Show" : "Hide"} Answer #1
      </Button>
      <Row>
        {showAnswers && (
          <Col md={12}>
            <iframe
              title="Answer #1"
              width="80%"
              height="400"
              src="//jsfiddle.net/cobasky/cgjbt06L/embedded/js/dark/"
              allowFullScreen="allowfullscreen"
              frameBorder="0"
            ></iframe>
          </Col>
        )}
        <Col md={12}>
          <i className="fas fa-search" />
          <input
            type="text"
            placeholder="Search movies..."
            name="search"
            value={keywords}
            className="search"
            onChange={(e) => setKeywords(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="card-container">
        {homeList &&
          homeList.data &&
          homeList.data.length > 0 &&
          homeList.data.map((item, id) => (
            <CardMovie
              key={`card-${id}`}
              item={item}
              setShow={setShowModal}
              setSrc={setSrcImg}
            />
          ))}
      </Row>
      <ModalImage show={showModal} setShow={setShowModal} srcImg={srcImg} />
      {homeList && homeList.loading && <p>Loading....</p>}
      <div className="loading">
        <h2>Load More</h2>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
