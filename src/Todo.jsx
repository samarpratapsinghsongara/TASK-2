import React, { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";
import "./todo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { faFileImport } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addProduct = () => {
    if (!text) return;
    setTodoList([
      ...todoList,
      { text, createdAt: new Date().toLocaleString() },
    ]);
    setText("");
  };

  const deleteTodo = (index) => {
    const newArray = todoList.filter((_, id) => id !== index);
    setTodoList(newArray);
  };

  const editTodo = (index) => {
    setEditIndex(index);

    setEditText(todoList[index].text);
    console.log(todoList[index].text);
  };

  const saveEdit = () => {
    const updatedList = [...todoList];
    updatedList[editIndex].text = editText;
    setTodoList(updatedList);

    console.log(updatedList);

    setEditIndex(null);
    setEditText("");
  };

  return (
    <>
      <Nav />
      <h1>Todo List</h1>
      <div>
        <input
          className="todoInput"
          type="text"
          placeholder="Enter your products"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addProduct}><FontAwesomeIcon icon={faFileImport} /></button>
      </div>

      <div className="table">
        <table border={1}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Task</th>
              <th>Created at</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                  ) : (
                    todo.text
                  )}
                </td>
                <td>{todo.createdAt}</td>
                <td>
                  {editIndex === index ? (
                    <button onClick={saveEdit}><FontAwesomeIcon icon={faFloppyDisk} /></button>
                  ) : (
                    <button onClick={() => editTodo(index)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                  )}
                  <button className="dltBtn" onClick={() => deleteTodo(index)}><FontAwesomeIcon icon={faTrash} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Todo;
