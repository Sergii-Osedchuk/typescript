import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ todos: Todo[] }> = (props) => {
  return (
    <ul>
      {props.todos.map(item => (
        <TodoItem key={item.id} text={item.text}/>
      ))}
    </ul>
  );
};

export default Todos;