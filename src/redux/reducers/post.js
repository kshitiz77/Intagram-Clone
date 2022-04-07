import types from "../types";
import { launchImageLibrary, ImageLibraryOptions } from "react-native-image-picker";
const initialState = {
    userPosts: [],
    userPostsImage: ""
}

const userPosts = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_POST: return {
            ...state,
            userPosts: [state.userPosts, action.item]
        };
        case types.DELETE_POST: return state;
        case types.UPLOAD_IMAGE: return {
            ...state,
            userPostsImage : action.payload
    }
        default : return state;
    }
}

export default userPosts;
