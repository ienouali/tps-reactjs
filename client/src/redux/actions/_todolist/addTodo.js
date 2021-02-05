import * as type from "../../constants/actionsTypes";


export default  function addTodo(todo) {
    return {
        type : type.ADD_TODO,
        payload : todo
    }
}