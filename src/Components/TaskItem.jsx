import React from 'react';
import { useTodo } from './Context/TodoContext';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask } = useTodo();

  return (
    <li className="flex items-center justify-between p-2 border-b border-gray-200">
      <div className="flex-1">
        <div className={`text-lg ${task.completed ? 'line-through' : ''}`}>
          {task.text}
        </div>
        <div className="text-sm text-gray-500">
          Due: {new Date(task.date).toLocaleDateString()} at {task.time}
        </div>
      </div>
      <div className="flex space-x-2">
        <button onClick={() => toggleTask(task.id)} className="text-green-500">
          {task.completed ? 'Undo' : 'Done'}
        </button>
        <button onClick={() => deleteTask(task.id)} className="text-red-500">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;