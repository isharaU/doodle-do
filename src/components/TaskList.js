import React from "react";
import TaskItem from "./TaskItem";
import { motion, AnimatePresence } from "framer-motion";

const TaskList = ({ tasks, toggleTask, startEditing, deleteTask, editingIndex, editedTask, setEditedTask, saveEditedTask }) => {
    return (
        <ul style={{ listStyleType: "none", padding: 0 }}>
            <AnimatePresence>
                {tasks.map((task, index) => (
                    <motion.li 
                        key={task.text} 
                        initial={{ opacity: 0, y: -20 }}  // Fade-in and slide-up effect
                        animate={{ opacity: 1, y: 0 }}   // Smoothly appear
                        exit={{ opacity: 0, x: -100 }}   // Slide out to the left when removed
                        transition={{ duration: 0.3 }}
                    >
                        <TaskItem 
                            task={task} 
                            index={index} 
                            toggleTask={toggleTask} 
                            startEditing={startEditing} 
                            deleteTask={deleteTask} 
                            editingIndex={editingIndex} 
                            editedTask={editedTask} 
                            setEditedTask={setEditedTask} 
                            saveEditedTask={saveEditedTask} 
                        />
                    </motion.li>
                ))}
            </AnimatePresence>
        </ul>
    );
};

export default TaskList;
