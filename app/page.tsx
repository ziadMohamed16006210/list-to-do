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
    <div style={styles.container}>
      <h1 style={styles.title}>📝 To Do List</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={todo}
          placeholder="Enter a task..."
          onChange={(e) => setTodo(e.target.value)}
          style={styles.input}
        />
        <button onClick={updateToDoList} style={styles.addButton}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((value, index) => (
          <li key={index} style={styles.listItem}>
            <span>{value}</span>
            <button
              onClick={() => deleteTodo(index)}
              style={styles.deleteButton}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center" as const,
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  addButton: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 12px",
    marginBottom: "10px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  deleteButton: {
    border: "none",
    backgroundColor: "#ef4444",
    color: "white",
    borderRadius: "6px",
    padding: "4px 8px",
    cursor: "pointer",
  },
};
