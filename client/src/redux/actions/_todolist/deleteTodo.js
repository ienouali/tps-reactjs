import * as type from "../../constants/actionsTypes";


export default function deleteTodo(id) {
    return {
        type : type.DELETE_TODO,
        payload : id
    }
}