import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import AddTaskForm from './AddTaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
    };

    return (
        <div>
            <AddTaskForm fetchTasks={fetchTasks} />
            <ul>
                {tasks.map(task => (
                    <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;

