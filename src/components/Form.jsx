import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false }); // every time refresh
  }
  return (
    <div>
      <form className={styles.formStyle} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputStyle}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="Enter todo items..."
          ></input>
          <button className={styles.buttonStyle} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
