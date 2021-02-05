import { all } from "redux-saga/effects";
import reposSaga from "./_github/reposSaga";
import todoSaga from "./_todolist/todoSaga";
import addTodoSaga from "./_todolist/addTodoSaga";
import editTodoSaga from "./_todolist/editTodoSaga";
import deleteTodoSaga from "./_todolist/deleteTodoSaga"

export default function* rootSaga() {
  yield all([reposSaga(), todoSaga(), addTodoSaga(), editTodoSaga(), deleteTodoSaga()]);
}
  