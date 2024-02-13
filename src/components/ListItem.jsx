import styles from "./listItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  const classNames = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemList}>
        <span className={classNames} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
