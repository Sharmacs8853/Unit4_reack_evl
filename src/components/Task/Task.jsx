import React from "react";
import styles from "./task.module.css";

const Task = (task) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li key={task.id} data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" value={task.done} />
      <div data-cy="task-text"><b>{task.text}</b></div>
      <button> + </button>
      <b>{task.count}</b>
      {/* Counter here */}
      <button> - </button>
      <button data-cy="task-remove-button">X</button>
    </li>
  );
};

export default Task;
