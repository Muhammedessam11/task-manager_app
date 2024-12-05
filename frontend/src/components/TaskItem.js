import React from 'react';

const TaskItem = ({ task, fetchTasks }) => {
    const deleteTask = async () => {
        await fetch(`/api/tasks/${task._id}`, { method: 'DELETE' });
        fetchTasks();
    };

    return (
        <li>
            {task.title}
            <button onClick={deleteTask}>Delete</button>
        </li>
    );
};

export default TaskItem;

