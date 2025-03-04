import React from "react";

const TaskItem = ({ task, index, toggleTask, startEditing, deleteTask, editingIndex, editedTask, setEditedTask, saveEditedTask }) => {
    return (
        <li style={{ 
            textDecoration: task.completed ? "line-through" : "none",
            cursor: "pointer"
        }}>
            {editingIndex === index ? (
                <>
                    <input 
                        type="text" 
                        value={editedTask} 
                        onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <button onClick={() => saveEditedTask(index)}>Save</button>
                </>
            ) : (
                <>
                    <span onClick={() => toggleTask(index)}>{task.text}</span>
                    <button onClick={() => startEditing(index)}>✏️ Edit</button>
                    <button onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>❌</button>
                </>
            )}
        </li>
    );
};

export default TaskItem;
