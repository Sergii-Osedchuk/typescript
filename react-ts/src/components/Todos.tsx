import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.todos.map(item => (
        <TodoItem key={item.id} text={item.text} onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;