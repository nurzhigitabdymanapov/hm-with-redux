const initialState = {
  auth: true,
};

export const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        auth: true,
      };
    case "LOGOUT":
      return {
        auth: false,
      };
    default:
      return state;
  }
};
