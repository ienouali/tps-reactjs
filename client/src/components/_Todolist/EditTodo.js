import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import editTodo from "../../redux/actions/_todolist/editTodo";

export default function EditTodo({item, hideForm}) {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
      setTodo(item.content);
    return () => {
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo(item.id,todo));
    setTodo("");
    hideForm();
  };

  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit}>
        <div className="group-form">
          <label>Edit todo</label>
          <div className="d-flex justify-content-between flex-row">
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              style={{ border: "none", borderBottom: "1px solid #ccc" }}
              placeholder="Edit todo"
              type="text"
              className="form-control mr-4"
            />
            <button type="submit" className="btn btn-info">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
