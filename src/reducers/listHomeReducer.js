const defaultState = {
  loading: false,
  data: [],
  dataDetail: {},
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
      const payload = action.payload ? action.payload.Search : [];
      return {
        ...state,
        loading: false,
        data: [...state.data, ...payload],
        totalResults: action.payload ? action.payload.totalResults : "",
        errorMsg: "",
      };
    case "DETAIL_MOVIE":
      return {
        ...state,
        loading: false,
        data: state.data,
        dataDetail: state.data[action.id],
      };
    case "RESET_LIST_MOVIE":
      return {
        ...state,
        loading: false,
        data: [],
        totalResults: "",
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default listHomeReducer;
