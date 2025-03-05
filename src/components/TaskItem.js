import React from "react";
import { motion } from "framer-motion";

const TaskItem = ({ task, index, toggleTask, startEditing, deleteTask, editingIndex, editedTask, setEditedTask, saveEditedTask }) => {
    return (
        <motion.div whileTap={{ scale: 0.95 }}>  {/* Small scale effect on click */}
            <li style={{ 
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                padding: "10px",
                borderBottom: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
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
                        <div>
                            <button onClick={() => startEditing(index)}>✏️ Edit</button>
                            <button onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>❌</button>
                        </div>
                    </>
                )}
            </li>
        </motion.div>
    );
};

export default TaskItem;
