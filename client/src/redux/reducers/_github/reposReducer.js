import * as type from "../../constants/actionsTypes";

const loadingReposReducer = (state = false, action) => {
    switch (action.type) {
        case type.GET_REPOS:
            return true;
        case type.GET_REPOS_SUCCESS:
            return false;
        case type.GET_REPOS_FAILED:
            return false;
        default:
            return state;
    }
};

const ReposReducers = (state = [], action) => {
    if (action.type === type.GET_REPOS_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadingReposReducer, ReposReducers};