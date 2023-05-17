import "./TodoLayout.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateText, loadTodo, addTodo, deleteTodo } from "../../store/slices/todoSlice";

function TodoLayout() {
  // const [todoText, setTodoText] = useState("");
  // const [todoList, setTodoList] = useState([]);
  const [saveData, setSaveData] = useState(false)

  //Using Redux
  const { todoText, todoList } = useSelector((state) => state.todo);
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  //Saving the todo so that it can be recovered after refreshing the page
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    // setTodoList(todoList);
    dispatch(loadTodo(todoList))
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

  const addTodoList = () => {
    // setTodoList([...todoList, todoText]);
    // setTodoText("");
    if (todoText !== "") {
      dispatch(addTodo())
    }
  };

  const deleteTodoList = (index) => {
    // setTodoList(todoList.filter((_, i) => i !== index));
    dispatch(deleteTodo(index))
  };
  return (
    <>
      <div className="todo-container">
        <div className="todo-header">Counter is at {value}</div>
        <div className="todo-header">Todo Application</div>
        <div className="todo-input-container">
          <Input
            type="text"
            placeholder="Add Todo"
            value={todoText}
            onChange={(e) => dispatch(updateText(e.target.value))}
          />
          <Button size="small" handleClick={addTodoList}>
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
                      handleClick={() => deleteTodoList(index)}
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
