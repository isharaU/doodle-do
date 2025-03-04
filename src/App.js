import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";

function App() {
    const [task, setTask] = useState(""); 
    const [tasks, setTasks] = useState([]); 
    const [editingIndex, setEditingIndex] = useState(null); 
    const [editedTask, setEditedTask] = useState(""); 

    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, { text: task, completed: false }]); 
        setTask(""); 
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const toggleTask = (index) => {
        setTasks(tasks.map((t, i) =>
            i === index ? { ...t, completed: !t.completed } : t
        ));
    };

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditedTask(tasks[index].text);
    };

    const saveEditedTask = (index) => {
        if (editedTask.trim() === "") return;
        const updatedTasks = [...tasks];
        updatedTasks[index].text = editedTask;
        setTasks(updatedTasks);
        setEditingIndex(null);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                if (editingIndex !== null) {
                    saveEditedTask(editingIndex);
                } else {
                    addTask();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [task, editedTask, editingIndex]); 

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

            <TaskList 
                tasks={tasks} 
                toggleTask={toggleTask} 
                startEditing={startEditing} 
                deleteTask={deleteTask} 
                editingIndex={editingIndex} 
                editedTask={editedTask} 
                setEditedTask={setEditedTask} 
                saveEditedTask={saveEditedTask} 
            />
        </div>
    );
}

export default App;
