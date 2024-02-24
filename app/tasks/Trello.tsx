'use client';

import { BoardType, TaskType, initialBoards, initialTasks } from './variables';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import { DndProvider } from 'react-dnd';
import Board from './Board';
import { Nullable } from '@/global/types';

type TrelloProps = {
    boards: Nullable<BoardType[]>;
    tasks: Nullable<TaskType[]>;
};

const Trello = ({ boards, tasks }: TrelloProps) => {
    const dndOptions = {
        enableMouseEvents: true
    };

    return (
        <DndProvider backend={TouchBackend} options={dndOptions}>
            <div className="mt-4 grid w-full grid-cols-3 gap-2 px-2 lg:gap-8">
                {boards?.map((board) => {
                    return (
                        <Board
                            key={board.id}
                            id={board.id}
                            title={board.title}
                            tasks={tasks?.filter((task) => task.boardId === board.id) || []}
                        />
                    );
                })}
            </div>
        </DndProvider>
    );
};

export default Trello;
