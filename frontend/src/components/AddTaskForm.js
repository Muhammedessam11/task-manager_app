import React, { useState } from 'react';

const AddTaskForm = ({ fetchTasks }) => {
    const [title, setTitle] = useState('');

    const addTask = async () => {
        await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, completed: false }),
        });
        setTitle('');
        fetchTasks();
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add a task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
        </div>
    );
};

export default AddTaskForm;

