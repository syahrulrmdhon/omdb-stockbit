const defaultState = {
  loading: false,
  data: [],
  totalResults: "",
  errorMsg: "",
};

const listHomeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MOVIE_LIST_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "MOVIE_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to get the List",
      };
    case "MOVIE_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload ? action.payload.Search : [],
        totalResults: action.payload ? action.payload.totalResults : "",
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default listHomeReducer;
