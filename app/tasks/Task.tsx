'use client';

import { useDrag } from 'react-dnd';
import { TaskType } from './variables';
import { deleteTask } from './api';
import { TiDelete } from 'react-icons/ti';

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
            className={`border-2 rounded-lg shadow-md bg-white hover:bg-white/80 border-white p-6 mt-4 border-r-4 cursor-grab relative ${
                isDragging ? 'opacity-25' : 'opacity-100'
            }`}>
            {task.title}
            <button onClick={() => removeTask(task.id)} className="absolute top-1 right-1">
                <TiDelete size={28} className="fill-red-600 hover:fill-red-400" />
            </button>
        </li>
    );
};

export default Task;
