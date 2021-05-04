import axios from "axios";

export const getListHome = ({ page, search }) => async (dispatch) => {
  try {
    dispatch({
      type: "MOVIE_LIST_LOADING",
    });
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=faf7e5bb&s=${search}&page=${page}`
    );

    dispatch({
      type: "MOVIE_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "MOVIE_LIST_FAIL",
    });
  }
};

export const getDetailMovie = (id) => async (dispatch) => {
  dispatch({
    type: "DETAIL_MOVIE",
    id,
  });
};

export const resetList = () => async (dispatch) => {
  dispatch({
    type: "RESET_LIST_MOVIE",
  });
};
