import { ReactComponent as ImgTask } from "../../assets/images/trash.svg";
import styles from "./Task.module.css";

const Task = ({ id, title, onDeleteTask, onIsCheckedTask, isChecked }) => {
  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  const handleClickCheckedTask = () => {
    onIsCheckedTask(id);
  };

  return (
    <div
      className={`${styles.task__container} ${isChecked ? "isChecked" : ""}`}
    >
      <input
        className={`${styles.task__container_input}`}
        type="radio"
        name={title}
        id={title}
        defaultChecked={isChecked}
        onClick={handleClickCheckedTask}
      />
      <label htmlFor={title} className={`${styles.task__container_p}`}>
        {title}
      </label>
      <button
        onClick={handleDeleteTask}
        type="button"
        className={`${styles.task__btn_delete}`}
      >
        <ImgTask className={`${styles.task__btn_svg}`} />
      </button>
    </div>
  );
};

export { Task };
