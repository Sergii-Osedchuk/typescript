import Todo from "../models/todo";
import { createContext, useState } from "react";

type TodosContextObj = {
  todos: Todo[],
  addTodo: (text: string) => void,
  deleteTodo: (id: string) => void
};

type Props = { children: React.ReactNode };

export const TodosContext = createContext<TodosContextObj>({
  todos: [],
  addTodo: (text) => {},
  deleteTodo: (id) => {}
});

const TodosContextProvider: React.FC<Props> = (props) => {
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

  const contextValue: TodosContextObj = {
    todos,
    addTodo: addTodoHandler,
    deleteTodo
  }

  return <TodosContext.Provider value={contextValue}>
    {props.children}
  </TodosContext.Provider>
}

export default TodosContextProvider;