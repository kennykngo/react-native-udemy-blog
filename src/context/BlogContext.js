import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      // api is always total source of truth
      return action.payload;
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    // case "add_blogpost":
    //   // section that returns what's going to be inside the JSX
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 99999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];

    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    // any route will be concatenated with the baseURL
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });

    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    // adding an if saves from future troubles
    callback && callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
