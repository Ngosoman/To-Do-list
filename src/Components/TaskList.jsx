import React from 'react';
import { useTodo } from '../Context/TodoContext.jsx';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTodo();

  return (
    <div className="mt-4">
      <ul className="list-none">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;