export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // token:
  //   "BQBY6ew1nTK2oYM7ncIeyOmR5hrfgImCHYtpRKj5MPUfIFgQCZbYzrKEPu8RUHwniZp8h4p7rygG9lLcf9CPESr9Sri239jBoQHepsHeuEoBWTHzUz4xLoqnaY9Fid_jXNVqdnFPqe7xVVwF8XLd-UC4XRggJ0tvR0BdHZPUuHM3u0gDXiPY",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlist: action.playlist,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
