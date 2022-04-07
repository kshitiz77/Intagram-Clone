import types from "../types";

export const createPost = () =>{
    return{
        type: types.CREATE_POST
    }
}

export const deletePost = () =>{
    return{
        type: types.DELETE_POST
    }
}

export const uploadImage = () =>{
    return{
        type: types.UPLOAD_IMAGE
    }
}