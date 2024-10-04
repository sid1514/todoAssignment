import React from "react";

const TodoCard = ({
  taskId,
  Task,
  Description,
  handleDeleteTask,

  taskComplete,
}) => {
  return (
    <div
      className={`p-4 flex ${
        taskComplete ? "line-through text-neutral-600" : null
      }`}
    >
      <div className="flex-1 w-8/12">
        <p className="text-xl text-yellow-600 font-bold">{Task}</p>
        <p>{Description}</p>
      </div>
      <div className="space-x-2 font-bold">
        <button
          className="bg-white rounded-full w-20 h-6 text-red-600 border border-1 border-red-600"
          onClick={() => handleDeleteTask(taskId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
