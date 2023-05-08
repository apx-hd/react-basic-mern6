import "./TodoLayout.css";
import Button from "../../components/Button";
import { useState } from "react";

function TodoLayout() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

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
          <input
            type="text"
            className="todo-input"
            placeholder="Add todo"
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
