import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      // section that returns what's going to be inside the JSX
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
