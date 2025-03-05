import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedTask, setEditedTask] = useState("");

    const addTask = (taskText) => {
        if (taskText.trim() === "") return;
        setTasks((prevTasks) => [...prevTasks, { text: taskText, completed: false }]);
    };

    const deleteTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    const toggleTask = (index) => {
        setTasks((prevTasks) =>
            prevTasks.map((t, i) =>
                i === index ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditedTask(tasks[index].text);
    };

    const saveEditedTask = (index) => {
        if (editedTask.trim() === "") return;
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index].text = editedTask;
            return updatedTasks;
        });
        setEditingIndex(null);
    };

    // Save tasks to local storage
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Save theme to local storage
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`app-container ${theme}`} style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>My To-Do List</h1>
            
            <button onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>

            <TaskInput addTask={addTask} />

            <TaskList 
                tasks={tasks} 
                setTasks={setTasks}  // Pass setTasks for reordering
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
