import React from 'react';
import Todo from './Todo';

const Todolist = (props) => {
  const [tasks, setTasks] = React.useState([
    {
      title: 'make metaverse',
      status: false,
    },
    {
      title: 'website updates',
      status: true,
    },
  ]);
  const deleteTask = React.useCallback((index) => {
    var temp = tasks;
    temp.splice(index, 1);
    setTasks([...temp]);
  },[])
  const [newTask, setNewTask] = React.useState('');
  return (
    <div className="betterview">
      <h3>Todolist</h3>
      <input
        type="text"
        onKeyUp={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTasks([...tasks, { title: newTask, status: false }]);
        }}
      >
        Add Task
      </button>
      {tasks.map((task, i) => {
        return <Todo task={task} index={i} key={i} deleteTask={deleteTask} />;
      })}
    </div>
  );
};
export default Todolist;
