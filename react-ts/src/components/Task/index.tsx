import ImgTask from "../../assets/images/trash.svg";
import "./Task.css";

type TaskProps = {
  id?: string;
  title: string;
  onDeleteTask: (id: string) => void;
  onIsCheckedTask: (id: string) => void;
  isChecked: boolean;
};

const Task = ({
  id,
  title,
  onDeleteTask,
  onIsCheckedTask,
  isChecked,
}: TaskProps) => {
  const handleDeleteTask = () => {
    onDeleteTask(`${id}`);
  };

  const handleClickCheckedTask = () => {
    onIsCheckedTask(`${id}`);
  };

  return (
    <div className={`task__container ${isChecked ? "isChecked" : ""}`}>
      <input
        className="task__container_input"
        type="radio"
        name={title}
        id={title}
        defaultChecked={isChecked}
        onClick={handleClickCheckedTask}
      />
      <label htmlFor={title} className="task__container_p">
        {title}
      </label>
      <button
        onClick={handleDeleteTask}
        type="button"
        className="task__btn_delete"
      >
        <img src={ImgTask} alt="" className="task__btn_svg" />
      </button>
    </div>
  );
};

export { Task };
