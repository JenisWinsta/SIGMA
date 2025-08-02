import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import AddForm from "./AddForm";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    console.log("delete", id);
    dispatch(deleteTodo(id));
  };

  const doneHandler = (id) => {
    console.log("mark ", id);
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />
      <h2>Todos List app</h2>
      <ul>
        
        {todos.map((todo) => (
          <li key={todo.id} style={{textDecoration:todo.isDone ? 'line-through' : 'none'}}>
            {todo.task}
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
            <button onClick={() => doneHandler(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
