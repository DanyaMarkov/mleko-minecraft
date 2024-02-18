'use client';

import { useDrag } from 'react-dnd';
import { TaskType } from './variables';
import { deleteTask } from './api';

const Task = ({ task }: { task: TaskType }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    const removeTask = (taskId: number) => {
        deleteTask(taskId);
    };

    return (
        <li
            ref={drag}
            draggable
            className={`border-2 border-white p-6 mt-4 border-r-4 cursor-grab relative ${
                isDragging ? 'opacity-25' : 'opacity-100'
            }`}>
            {task.title}
            <button onClick={() => removeTask(task.id)} className="absolute top-1 right-2">
                X
            </button>
        </li>
    );
};

export default Task;
