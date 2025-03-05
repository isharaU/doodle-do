import React, { useState, useEffect } from "react";

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState("");

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                addTask(task);
                setTask(""); // Clear input
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [task, addTask]);

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={() => { addTask(task); setTask(""); }}>Add</button>
        </div>
    );
};

export default TaskInput;
