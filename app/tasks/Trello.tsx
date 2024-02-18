'use client';

import { BoardType, TaskType, initialBoards, initialTasks } from './variables';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Board from './Board';
import { Nullable } from '@/global/types';

type TrelloProps = {
    boards: Nullable<BoardType[]>;
    tasks: Nullable<TaskType[]>;
};

const Trello = ({ boards, tasks }: TrelloProps) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="grid grid-cols-3  w-full gap-8 mt-4">
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
