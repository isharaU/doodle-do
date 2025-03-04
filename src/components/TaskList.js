import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, startEditing, deleteTask, editingIndex, editedTask, setEditedTask, saveEditedTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <TaskItem 
                    key={index} 
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
            ))}
        </ul>
    );
};

export default TaskList;
