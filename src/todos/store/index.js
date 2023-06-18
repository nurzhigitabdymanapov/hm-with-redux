import { combineReducers, createStore } from "redux";
import { authReduser } from "./auth";

const rootReduser = combineReducers({
    auth: authReduser,
})

export const storeTodos = createStore(rootReduser)