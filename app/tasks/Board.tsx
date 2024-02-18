'use client';

import { useDrop } from 'react-dnd';
import { TaskType } from './variables';
import Task from './Task';
import { newTaskMove } from './api';

type BoardProps = {
    id: number;
    title: string;
    tasks: TaskType[];
};

const Board = ({ id, title, tasks }: BoardProps) => {
    const addItemToBoard = async (newTaskId: number) => {
        newTaskMove(newTaskId, id);
    };

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item: TaskType) => addItemToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    return (
        <div
            ref={drop}
            className={` p-4 border-2 border-gray-50 bg-slate-200 text-black rounded-xl ${
                isOver ? 'bg-[#f8f8f8]' : ''
            }`}>
            <h2 className="font-black">{title}</h2>
            <ul>
                {tasks.map((task: TaskType) => {
                    return <Task task={task} key={task.id} />;
                })}
            </ul>
        </div>
    );
};

export default Board;
