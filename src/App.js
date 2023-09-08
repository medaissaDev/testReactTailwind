import React, { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import { FetchTasks } from "./services/TaskService";
import { TaskContext } from "./Contexts/TaskContext";

const App = () => {
  const [tasks, setTasks] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    FetchTasks()
      .then((response) => response.json())
      .then((response) => {
        setTasks(response);
        setLoading(false);
      });
  }, []);
  return (
    <TaskContext.Provider value={{ tasks, setTasks, loading }}>
      <div className="grid h-screen place-items-center">
        {loading && <div>Loading...</div>}
        <TaskList />
      </div>
    </TaskContext.Provider>
  );
};

export default App;
