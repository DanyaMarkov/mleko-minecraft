'use client';

import { useState } from 'react';
import { BoardType, TaskType, initialBoards } from './variables';
import { Nullable } from '@/app/global/types';

const TasksBoards = () => {
    const [boards, setBoards] = useState<BoardType[]>(initialBoards);

    const [currentBoard, setCurrentBoard] = useState<Nullable<BoardType>>(null);
    const [currentItem, setCurrentItem] = useState<Nullable<TaskType>>(null);

    const dragOverHandler = (e: any) => {
        e.preventDefault();
        // if (e.target.className)
        e.target.style.boxShadow = '0 22px 33px gray';
    };

    const dragLeaveHandler = (e: any) => {
        e.target.style.boxShadow = 'none';
    };

    const dragStartHandler = (e: any, board: Nullable<BoardType>, item: Nullable<TaskType>) => {
        setCurrentBoard(board);
        setCurrentItem(item);
    };

    const dragEndHandler = (e: any) => {
        e.target.style.boxShadow = 'none';
    };

    const dropHandler = (e: any, board: Nullable<BoardType>, item: Nullable<TaskType>) => {
        e.preventDefault();

        if (currentItem && item) {
            const currentIndex = currentBoard?.items.indexOf(currentItem);
            if (currentIndex && board) {
                currentBoard?.items.splice(currentIndex, 1);
                const dropIndex = board.items.indexOf(item);
                board?.items.splice(dropIndex + 1, 0, currentItem);
                if (currentBoard) {
                    setBoards(
                        boards?.map((boardElement) => {
                            if (boardElement.id === board.id) {
                                return board;
                            }
                            if (boardElement.id === currentBoard.id) {
                                return currentBoard;
                            }
                            return boardElement;
                        })
                    );
                }
            }
        }
    };

    const dropCardHandler = (e: any, board: Nullable<BoardType>) => {
        e.stopPropagation();
        if (e.target.className !== 'name-class') {
            if (currentItem) {
                if (board) {
                    board.items.push(currentItem);
                }
                const currentIndex = currentBoard?.items.indexOf(currentItem);
                if (currentIndex && board) {
                    currentBoard?.items.splice(currentIndex, 1);
                }
                if (currentBoard && board) {
                    setBoards(
                        boards?.map((boardElement) => {
                            if (boardElement.id === board.id) {
                                return board;
                            }
                            if (boardElement.id === currentBoard.id) {
                                return currentBoard;
                            }
                            return boardElement;
                        })
                    );
                }
            }
        }
    };

    return (
        <div className="flex flex-row gap-8">
            {boards.map((board) => {
                return (
                    <div
                        className="min-w-48 px-6 py-8 border-2 border-white"
                        key={board.id}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropCardHandler(e, board)}>
                        <div className="font-extrabold text-xl">{board.title}</div>
                        <ul>
                            {board.items.map((item) => {
                                return (
                                    <li
                                        draggable
                                        onDragOver={(e) => dragOverHandler(e)}
                                        onDragLeave={(e) => dragLeaveHandler(e)}
                                        onDragStart={(e) => dragStartHandler(e, board, item)}
                                        onDragEnd={(e) => dragOverHandler(e)}
                                        onDrop={(e) => dropHandler(e, board, item)}
                                        className="border-2 border-white p-6 mt-4 border-r-4">
                                        {item.title}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default TasksBoards;
