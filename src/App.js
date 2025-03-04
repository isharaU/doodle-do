import { useState } from "react";

function App() {
    const [task, setTask] = useState(""); 
    const [tasks, setTasks] = useState([]); 

    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, task]); 
        setTask(""); 
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>My To-Do List</h1>
            <input 
                type="text" 
                placeholder="Enter a task..." 
                value={task} 
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>
                        {t} 
                        <button onClick={() => deleteTask(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
