import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

import axios from "axios";

const Todolists = () => {
  const [Tasks, setTasks] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKENDURL;
  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${backendUrl}/getTasks`);
      console.log(res)
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, [Tasks]);
  const handleDeleteTask = async (taskId) => {
    try {
      const res = await axios.delete(`${backendUrl}/deleteTask/${taskId}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-y-scroll h-[99%]">
      {Tasks.map((t) => (
        <TodoCard
          taskId={t._id}
          Task={t.TaskName}
          Description={t.TaskDescription}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default Todolists;
