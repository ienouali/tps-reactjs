import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "../../constants/actionsTypes";
import {setRepos} from "../../actions/_github/reposAction";
import { getRepositories } from "../../../api/repositories/getRepositories";



function* loadRepos(action) {
  try {
      const repos = yield call(getRepositories, action.payload);
      yield put(setRepos(repos));
     
  }  catch (err) {
      yield put(setRepos(err.toString()));
  }
}

export default function* watchReposSaga() {
  yield  takeEvery(type.GET_REPOS,loadRepos);
}
