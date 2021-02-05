import * as type from "../../constants/actionsTypes";


const loadRepos = (currentPage) => ({
  type: type.GET_REPOS,
  payload : currentPage
});

const setRepos = repos => ({
  type: type.GET_REPOS_SUCCESS,
  payload: repos
});

export {loadRepos, setRepos}