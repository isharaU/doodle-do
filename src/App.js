import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"; // Load theme from local storage
    });

    const [editingIndex, setEditingIndex] = useState(null);
    const [editedTask, setEditedTask] = useState("");

    const addTask = (taskText) => {
        if (taskText.trim() === "") return;
        setTasks([...tasks, { text: taskText, completed: false }]);
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

    // Save tasks to local storage whenever they change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Save theme to local storage and apply it
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme; // Apply theme to the body
    }, [theme]);

    // Function to toggle theme
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
