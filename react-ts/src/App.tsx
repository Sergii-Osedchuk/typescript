import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ];

  const addTodoHandler = (todoText: string) => {

  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos todos = {todos}/>
    </div>
  );
}

export default App;
