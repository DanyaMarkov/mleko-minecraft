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
            className={`lg:text-md z-0 mt-4 flex cursor-grab flex-col items-center break-words rounded-lg border-2 border-r-4 border-white bg-white p-2 text-sm shadow-md hover:bg-white/80 lg:relative lg:items-start lg:p-6 ${
                isDragging ? 'opacity-25' : 'opacity-100'
            }`}>
            {task.title}
            <button
                onClick={() => removeTask(task.id)}
                // className="selft-center lg:self-auto"
                className="block  lg:absolute lg:right-1 lg:top-1">
                <TiDelete size={28} className="fill-red-600 hover:fill-red-400" />
            </button>
        </li>
    );
};

export default Task;
