import { CREATE_POST, FETCH_POSTS } from "./types";

const defaultState = {
  posts: [],
  fetchedPosts: [],
};

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat([action.payload]) };
    // return { ...state, posts: [...state.posts, action.payload] };
    case FETCH_POSTS:
      return { ...state, fetchedPosts: action.payload };
    default:
      return state;
  }
};
