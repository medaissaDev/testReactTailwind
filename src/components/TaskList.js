import { useContext } from "react";
import React from "react";
import { TaskContext } from "../Contexts/TaskContext";

function TaskList() {
  const { tasks, setTasks } = useContext(TaskContext);
  const updateTaskStatus = (id) => {
    let tasksCopy = [...tasks];
    for (var i = 0; i < tasksCopy.length; i++) {
      if (tasks[i].id === id) {
        tasksCopy[i].completed = !tasksCopy[i].completed;
      }
    }
    setTasks(tasksCopy);
  };
  return (
    <div>
      {tasks && tasks.length && (
        <div>
          <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {tasks.map((task, i) => {
              return (
                <li
                  key={task.userId + i}
                  className="w-full h-12 px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                >
                  <span
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "300px",
                    }}
                  >
                    {task.title}
                  </span>
                  <div className="float-right">
                    <button
                      type="button"
                      className={
                        "px-2 py-2 text-xs font-medium text-center focus:outline-none " +
                        (task.completed
                          ? "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          : "text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700")
                      }
                      onClick={() => updateTaskStatus(task.id)}
                    >
                      {task.completed ? "Completed" : "Pending"}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TaskList;
