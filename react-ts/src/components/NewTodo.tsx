import { useRef } from 'react';

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  }

  const enteredText = todoInputRef.current!.value;

  if(enteredText.trim().length === 0) {
    return;
  }

  props.onAddTodo(enteredText);

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type='text' id='text' ref = {todoInputRef}></input>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;