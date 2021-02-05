import axios from "axios";

export const getTodos = async () => {
  const res = await axios.get("https://react-exercices.herokuapp.com/todos");
  return res.data;
};

export const addTodo = async (todo) => {
  const res = await axios.post("https://react-exercices.herokuapp.com/todos", {
    todo,
  });
  return res.data.message;
};

export const editTodo = async (todo) => {
  const res = await axios.patch(
    "https://react-exercices.herokuapp.com/todos",
    todo
  );
  return res.data.message;
};

export const deleteTodo = async (id) => {
  console.log(id);
  const res = await axios.delete(
    "https://react-exercices.herokuapp.com/todos/" + id
  );
  return res.data.message;
};
