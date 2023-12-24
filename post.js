const { createStore, applyMiddleware } = require("redux");
const axios = require("axios");
const { thunk } = require("redux-thunk");

const REQUEST_STARTED = "REQUEST_STARTED";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILLED = "FETCH_FAILLED";
const initialState = {
  posts: [],
  error: "",
  loading: false,
};

const fetchPostRequest = () => {
  return {
    type: REQUEST_STARTED,
    loading: true,
  };
};
const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_SUCCESS,
    payload: posts,
    loading: false,
  };
};
const fetchPostFailled = (error) => {
  return {
    type: FETCH_FAILLED,
    payload: error,
  };
};

//action to make the request
const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostRequest());
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(fetchPostSuccess(data));
      console.log("jimma");
    } catch (error) {
      dispatch(fetchPostFailled(error.message));
    }
  };
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case FETCH_FAILLED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const store = createStore(postsReducer, applyMiddleware(thunk));
store.dispatch(fetchPosts());
console.log(store.getState());
