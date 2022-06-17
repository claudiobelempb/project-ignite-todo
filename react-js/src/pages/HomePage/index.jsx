import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Task } from "../../components/Task";

import styles from "./Home.module.css";

import { ReactComponent as ImgPlus } from "../../assets/images/plus.svg";
import { ReactComponent as ImgClipboard } from "../../assets/images/Clipboard.svg";

const HomePage = () => {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: "Tomar café 1 false", done: false },
    { id: uuidv4(), title: "Terminar o desafio 2 true", done: true },
    { id: uuidv4(), title: "Terminar o desafio 1 true", done: true },
    { id: uuidv4(), title: "Tomar café 2 false", done: false },
  ]);

  const [taskInput, setTaskInput] = useState("");
  const [isCheckedTask, setIsCheckedTask] = useState(false);

  const handleAddNewTask = (event) => {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskInput,
        done: false,
      },
    ]);
    setTaskInput("");
  };

  const handleNewTaskChange = (event) => {
    event.target.setCustomValidity("");
    setTaskInput(event.target.value);
  };

  const handleDeleteTask = (id) => {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksWithoutDeleteOne);
  };

  const handleIsCheckedTask = (id) => {
    const updateCheckedTask = [...tasks];
    const taskExits = updateCheckedTask.find((task) => task.id === id);

    if (taskExits) {
      setIsCheckedTask((state) => {
        return (state = taskExits.done = !isCheckedTask);
      });
      setTasks(updateCheckedTask);
    }
  };

  const processTask = tasks
    .filter((task) => task.done)
    .map((task) => task.done)
    .reduce(
      (acc, el) => {
        return {
          total: (acc.total = tasks.length),
          done: acc.done + el,
        };
      },
      { total: 1, done: 0 }
    );

  return (
    <div className={`container ${styles.home__container}`}>
      <div className="content">
        <form
          onSubmit={handleAddNewTask}
          className={`${styles.home__container_form}`}
        >
          <input
            className={`${styles.home__container_imput}`}
            type="text"
            placeholder="Adicione uma nova tarefa"
            name="task"
            value={taskInput}
            onChange={handleNewTaskChange}
          />
          <button className={`${styles.home__container_button}`} type="submit">
            Criar <ImgPlus />
          </button>
        </form>

        {tasks.length > 0 ? (
          <>
            <div className={styles.home__container_task}>
              <div className={styles.home__container_created}>
                <strong>Tarefas criadas</strong>
                <span>{processTask.total}</span>
              </div>
              <div className={styles.home__container_task_conclude}>
                <strong>Concluídas</strong>
                <span>
                  {processTask.done} de {processTask.total}
                </span>
              </div>
            </div>
            {tasks.map((task) => (
              <Task
                key={task.id}
                title={task.title}
                isChecked={task.done}
                onDeleteTask={() => handleDeleteTask(task.id)}
                onIsCheckedTask={() => handleIsCheckedTask(task.id)}
              />
            ))}
          </>
        ) : (
          <>
            <div className={styles.home__container_task}>
              <div className={styles.home__container_created}>
                <strong>Tarefas criadas</strong>
                <span>{tasks.length}</span>
              </div>
              <div className={styles.home__container_task_conclude}>
                <strong>Concluídas</strong>
                <span>{tasks.length}</span>
              </div>
            </div>
            <div className={styles.home__container_clipboard}>
              <ImgClipboard />
              <p>
                Você ainda não tem tarefas cadastradas Crie tarefas e organize
                seus itens a fazer
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
