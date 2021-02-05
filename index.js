const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const todos = [{ id: 1, content: "First todo" }];

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.post("/todos", (req, res) => {
  const data = req.body;
  const todo = {
    id: todos.length + 1,
    content: data.todo,
  };
  todos.push(todo);
  res.status(201).send({ message: "Todo added successfuly !" });
});

app.patch("/todos", (req, res) => {
  const data = req.body;
  console.log(data);

  const todo = todos.find((todo) => todo.id === data.id);
  todo.content = data.todo;
  todos[todo.id - 1] = todo;
  res.status(201).send({ message: "Todo updated successfuly !" });
});

app.delete("/todos/:id", (req, res) => {
  const params = req.params;
  todos.splice(params.id - 1, 1);
  res.status(207).send({ message: "Todo deleted successfuly !" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const PORT = process.env.PORT || 9999;
app.listen(PORT, async () => {
  console.log("Listening on 9999..");
});
