import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "../../constants/actionsTypes";
import {getTodos, deleteTodo} from "../../../api/todos/todos";


function* handlleDeleteTodo(action) {
  try {
    const message = yield call(deleteTodo, action.payload);
    
    const todos = yield call(getTodos); 
    yield put({ type: type.GET_TODOS_SUCCESS, todos });
  
    yield put({ type: type.DELETE_TODO_SUCCESS, message });

   
  } catch (err) {
    yield put({ type: type.DELETE_TODO_FAILED, message: err.message });
  }
}

function* deleteTodoSaga() {
  yield takeEvery(type.DELETE_TODO, handlleDeleteTodo);
}

export default deleteTodoSaga;
