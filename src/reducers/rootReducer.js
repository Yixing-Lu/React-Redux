const initState = {
  posts: [
    { id: "1", title: "first", body: "1body" },
    { id: "2", title: "second", body: "2body" },
    { id: "3", title: "third", body: "3body" },
  ],
};
const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;
