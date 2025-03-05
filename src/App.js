import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedTask, setEditedTask] = useState("");

    const addTask = (taskText) => {
        if (taskText.trim() === "") return;
        const newTasks = [...tasks, { text: taskText, completed: false }];
        setTasks(newTasks);
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
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>My To-Do List</h1>
            
            <TaskInput addTask={addTask} />

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
