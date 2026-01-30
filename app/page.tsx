"use client";

import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");

  const updateToDoList = () => {
    if (!todo.trim()) return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>To do list app</h1>

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={updateToDoList}>Add Todo</button>

      <ul>
        {todos.map((value, index) => (
          <li key={index}>
            {value}
            <button onClick={() => deleteTodo(index)}>
              Delete Todo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
