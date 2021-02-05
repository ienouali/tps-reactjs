import * as type from "../../constants/actionsTypes";


export default function deleteTodo(state = false, action) {
    switch (action.type) {
        case type.DELETE_TODO:
          return true;
        case type.DELETE_TODO_SUCCESS :    
         return action.message;
         case type.DELETE_TODO_FAILED : 
         return false;
        default:
          return state;
      }
}