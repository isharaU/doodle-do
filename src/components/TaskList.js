import React from "react";
import TaskItem from "./TaskItem";
import { Reorder, AnimatePresence } from "framer-motion";

const TaskList = ({ tasks, setTasks, toggleTask, startEditing, deleteTask, editingIndex, editedTask, setEditedTask, saveEditedTask }) => {
    return (
        <Reorder.Group 
            axis="y" 
            values={tasks} 
            onReorder={setTasks} 
            style={{ listStyleType: "none", padding: 0 }}
        >
            <AnimatePresence>
                {tasks.map((task, index) => (
                    <Reorder.Item 
                        key={task.text} 
                        value={task} 
                        initial={{ opacity: 0, y: -20 }}  
                        animate={{ opacity: 1, y: 0 }}  
                        exit={{ opacity: 0, x: -100 }}  
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
                    </Reorder.Item>
                ))}
            </AnimatePresence>
        </Reorder.Group>
    );
};

export default TaskList;
