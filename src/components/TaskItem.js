import React from "react";
import { Reorder } from "framer-motion";

const TaskItem = ({ task, index, toggleTask, startEditing, deleteTask, editingIndex, editedTask, setEditedTask, saveEditedTask }) => {
    return (
        <Reorder.Item 
            value={task} 
            whileDrag={{ scale: 1.05 }}  // Slight scale effect while dragging
            style={{ 
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "grab",
                padding: "10px",
                borderBottom: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#f9f9f9",
                borderRadius: "5px",
                marginBottom: "5px"
            }}
        >
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
                    <div>
                        <button onClick={() => startEditing(index)}>✏️ Edit</button>
                        <button onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>❌</button>
                    </div>
                </>
            )}
        </Reorder.Item>
    );
};

export default TaskItem;
