const initialState = {
  auth: true,
  todos: [],
  edit: false,
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
        ...state,
        auth: false,
      };
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
    case "DELETEALL":
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== el.id),
      };
    case "EDIT":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload.id) {
            item.edit = !action.payload.edit;
          }
          return item;
        }),
      };
    case "SAVE":
      return {
        ...state,
        todos: state.todos.map((item) => {
          console.log(action.payload);
          if (item.id === action.payload.id) {
            item.title = action.payload.title;
            item.id = action.payload.id;
            item.completed = item.completed ;
            item.edit = false;
          }
          return item;
        }),
      };
    case "COMPLETED":
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === action.payload) {
            return {
              ...el,
              completed: !el.completed,
            };
          }
          return el;
        }),
      };
    default:
      return state;
  }
};
