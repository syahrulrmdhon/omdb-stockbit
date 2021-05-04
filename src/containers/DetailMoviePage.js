import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import { getDetailMovie } from "../actions/listHomeAction";
import CardDetailMovie from "../components/CardDetailMovie/CardDetailMovie";

const DetailMoviePage = ({ match }) => {
  const { params } = match;
  const dispatch = useDispatch();
  const dataDetail = useSelector((state) => state.listHome.dataDetail);

  const getDetail = (id) => {
    dispatch(getDetailMovie(id));
  };

  useEffect(() => {
    getDetail(params.idMovie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <h1>Detail Movie</h1>
      <Row>
        {dataDetail && Object.keys(dataDetail).length !== 0 && (
          <CardDetailMovie item={dataDetail} />
        )}
      </Row>
    </React.Fragment>
  );
};

export default DetailMoviePage;
