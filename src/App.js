import React, { useState } from 'react';

function App() {
  // state variables
  const [task, setTask] = useState(''); // stores the input values
  const [taskList, setTaskList] = useState([]); // stores the list of tasks

  // handle adding a task
  const addTask = () => {
    if (task.trim() === '') return;
    setTaskList([...taskList, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Task List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;