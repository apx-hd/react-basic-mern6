import "./TodoLayout.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState, useEffect } from "react";

function TodoLayout() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [saveData, setSaveData] = useState(false)

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    setTodoList(todoList);
  }, []);

  useEffect(() => {
    setSaveData(true)
  }, [todoList])

  useEffect(() => {
    if (saveData) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
      setSaveData(false)
    }
  }, [saveData]);

  //useEffect
  // useEffect(() => {
  //   console.log("Something happened");
  // })
  // useEffect(() => {
  //   console.log("Component Mounted");

  //   return () => {
  //     console.log("Component Unmounted")
  //   }
  // }, [])
  // useEffect(() => {
  //   console.log("todoList updated");
  // }, [todoList])

  const addTodo = () => {
    setTodoList([...todoList, todoText]);
    setTodoText("");
  };

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="todo-container">
        <div className="todo-header">Todo Application</div>
        <div className="todo-input-container">
          <Input
            type="text"
            placeholder="Add Todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button size="small" handleClick={addTodo}>
            Add
          </Button>
        </div>
        <div className="todo-list-container">
          <div className="todo-list-header">
            <div className="todo-list-item">Todo</div>
            <div className="todo-list-item">Action</div>
          </div>
          <div className="todo-list-content">
            {todoList.map((todo, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div className="todo-list-item-text">{todo}</div>
                  <div className="todo-list-item-action">
                    <Button
                      size="small"
                      color="error"
                      handleClick={() => deleteTodo(index)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoLayout;
