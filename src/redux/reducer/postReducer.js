// import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from "../actions/actionTypes";

// let initialPostsState = {
//     posts: [],
//     loading: false,
//     error: null
// };

// const postReducer = (state = initialPostsState) =>{
//     switch(action.type){
//         case FETCH_POSTS_REQUEST:
//             return(
//                 {...state, loading: true}
//             )
//         case FETCH_POSTS_SUCCESS:
//             return(
//                 {...state, loading: false, data: action.payload, error: null}
//             )
//         case FETCH_POSTS_FAILURE:
//             return(
//                 {...state, loading: false, data: [], error: action.payload}
//             )
//         default:
//             return state;
//     }
// }
// export default postReducer;


import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from "../actions/actionTypes";

let initialPostsState = {
  posts: [],
  loading: false,
  error: null
};

const postReducer = (state = initialPostsState, action) => {
  switch(action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_POSTS_SUCCESS:
        const postsWithImgSrc = action.payload.map((post) => ({
          ...post,
          imgSrc: `https://picsum.photos/200?random=${post.id}`,
        }));
        return {
          ...state,
          loading: false,
          posts: postsWithImgSrc,
          error: null,
        };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
