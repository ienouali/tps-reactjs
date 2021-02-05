import { combineReducers } from "redux";
import {loadingReposReducer, ReposReducers} from "./_github/reposReducer";
import todos from "./_todolist/todos";
import addTodo from "./_todolist/addTodo";
import deleteTodo from "./_todolist/deleteTodo";

const rootReducer = combineReducers({ 
     isLoading : loadingReposReducer,
     repos : ReposReducers,
     addTodo, deleteTodo, todos });

export default rootReducer;
