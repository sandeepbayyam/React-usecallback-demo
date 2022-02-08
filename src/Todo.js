import React from 'react';
const Todo = ({ task, deleteTask, index }) => {
  React.useEffect(() => {
    console.log('Todo called', task.title);
  });
  return (
    <div className="task">
      <li>
        {task.title}
        <button
          onClick={() => {
            deleteTask(index);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
};
export default React.memo(Todo);
