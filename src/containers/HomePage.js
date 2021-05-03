import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import "./HomePage.scss";
import { getListHome } from "../actions/listHomeAction";
import CardMovie from "../components/CardMovie";

const HomePage = () => {
  const dispatch = useDispatch();
  const homeList = useSelector((state) => state.listHome);
  const [page, setPage] = useState(1);
  const [keywords, setKeywords] = useState("batman");

  const fetchHome = (params) => {
    dispatch(getListHome(params));
  };

  useEffect(() => {
    fetchHome({ page, search: keywords });
  }, [keywords, page]);

  return (
    <React.Fragment>
      <h1>HomePage</h1>
      <Row>
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
          homeList.data.Search &&
          homeList.data.Search.length > 0 &&
          homeList.data.Search.map((item) => <CardMovie item={item} />)}
      </Row>
      {homeList && homeList.loading && <p>Loading....</p>}
    </React.Fragment>
  );
};

export default HomePage;
