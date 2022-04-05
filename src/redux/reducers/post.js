import types from "../types";

const initialState = {
    userPosts : []
}

const userPosts = (state = initialState, action) =>{
    switch(action.type){
        case types.CREATE_POST : return {
            ...state,
            userPosts : [state.userPosts, action.item]
        };
        case types.DELETE_POST : return state;
        default : return state;
    }
}

export default userPosts;
