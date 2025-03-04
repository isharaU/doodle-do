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

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Task List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;