import * as type from "../../constants/actionsTypes";


export default  function editTodo(id, todo) {
    return {
        type : type.EDIT_TODO,
        payload : {id,todo}
    }
}