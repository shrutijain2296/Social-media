import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from "./actionTypes";
import axios from "axios";

export const fetchPostsRequest = () =>{
    return{
        type: FETCH_POSTS_REQUEST
    }
}
export const fetchPostsSuccess = (data) =>{
    return{
        type: FETCH_POSTS_SUCCESS,
        payload: data
    }
}
export const fetchPostsFailure = (error) =>{
    return{
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
      dispatch(fetchPostsRequest());
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => dispatch(fetchPostsSuccess(data)))
        .catch((error) => dispatch(fetchPostsFailure(error.message)));
    };
  };
