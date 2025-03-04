import { useState, useEffect } from "react";

function App() {
    const [task, setTask] = useState(""); 
    const [tasks, setTasks] = useState([]); 

    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, { text: task, completed: false }]); 
        setTask(""); 
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((t, i) =>
            i === index ? { ...t, completed: !t.completed } : t
        );
        setTasks(updatedTasks);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                addTask();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [task]);

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
                    <li 
                        key={index} 
                        onClick={() => toggleTask(index)}
                        style={{ 
                            textDecoration: t.completed ? "line-through" : "none",
                            cursor: "pointer"
                        }}
                    >
                        {t.text} 
                        <button onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;