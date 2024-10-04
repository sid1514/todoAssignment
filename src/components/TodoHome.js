import React, { useState } from "react";
import Todolists from "./Todolists";
import axios from "axios";

const TodoHome = () => {
  const [task, setTask] = useState("");
  
  const [description, setDescription] = useState("");
  ;
  const handleAddTask = async() => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKENDURL}/addTask`,{TaskName:task,TaskDescription:description});
      console.log(res);
    } catch (error) {
      console.log(error);
    }
   
  };
  return (
    <div className="md:py-10 md:px-16 flex justify-center bg-neutral-300 text-white w-full h-screen">
      <div className="p-10 flex flex-col justify-center align-center bg-neutral-800 md:w-8/12 rounded-xl md:h-[98%]">
        <div className="w-full text-xl text-center font-bold my-2">
          <p>My Todos</p>
        </div>
        
        <div className="md:w-9/12 ml-24 h-[95%]">
          <div className="p-6 flex bg-neutral-700 rounded">
            <form className=" md:flex " onSubmit={handleAddTask}>
              <div className="md:w-7/12 md:flex md:space-x-4">
                <div className="flex flex-col md:w-1/2 w-11/12">
                  <label>Name</label>
                  <input
                    value={task}
                    type="text"
                    className="rounded-xl border border-yellow-600 h-8 text-black p-2"
                    onChange={(e) => setTask(e.target.value)}
                  />
                </div>
                <div className="flex flex-col md:w-1/2 w-11/12">
                  <label>Description</label>
                  <input
                    type="text"
                    value={description}
                    className="rounded-xl border border-yellow-600 h-8 text-black p-2 "
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="pt-6 ml-20 w-1/4">
                <button
                  className="bg-yellow-500 rounded-xl text-sm w-24 h-6 font-bold"
                  type="submit"
                >
                  Add Todo
                </button>
              </div>
            </form>
          </div>
          <div className=" bg-neutral-700 rounded mt-6 h-[77%] ">
            <Todolists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoHome;
