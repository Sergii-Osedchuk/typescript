import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from 'react';

function App() {
  const [ todos, setTodos ] = useState<Todo[]>([]);

  

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos(prev => [...prev, newTodo]);
  }

  const deleteTodo = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos todos = {todos} onDeleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
