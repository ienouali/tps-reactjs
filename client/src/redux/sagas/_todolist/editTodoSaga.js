import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "../../constants/actionsTypes";
import {editTodo, getTodos} from "../../../api/todos/todos";


function* handlleEditTodo(action) {
  try {
    const message = yield call(editTodo, action.payload);
    
    const todos = yield call(getTodos); 
    yield put({ type: type.GET_TODOS_SUCCESS, todos });
  
    yield put({ type: type.EDIT_TODO_SUCCESS, message });

   
  } catch (err) {
    yield put({ type: type.EDIT_TODO_FAILED, message: err.message });
  }
}

function* editTodoSaga() {
  yield takeEvery(type.EDIT_TODO, handlleEditTodo);
}

export default editTodoSaga;
