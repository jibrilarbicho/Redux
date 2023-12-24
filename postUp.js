const { createStore } = require("redux");

const initialState = {
  posts: [],
};
const postAddAction = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};
const RemovePost = (id) => {
  return {
    type: "REMOVE_POST",
  };
};
const postReducer = (state = initialState, action) => {};
const store = createStore(postReducer);
