import userStatus from "./auth";
import userPosts from "./post";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    userStatus,
    userPosts
})

export default rootReducer;


