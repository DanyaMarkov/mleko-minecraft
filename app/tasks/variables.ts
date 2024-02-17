export type TaskType = {
    id: number;
    title: string;
    boardId: number;
};

export type BoardType = {
    id: number;
    title: string;
};

export const initialBoards: BoardType[] = [
    {
        id: 1,
        title: 'Сделать'
    },
    {
        id: 2,
        title: 'В работе'
    },
    {
        id: 3,
        title: 'Сделано'
    }
];

export const initialTasks: TaskType[] = [
    { id: 1, title: 'Пойти в магазин', boardId: 1 },
    { id: 2, title: 'Погулять', boardId: 1 },
    { id: 3, title: 'Футбол', boardId: 1 },
    { id: 4, title: 'Волейбол', boardId: 2 },
    { id: 5, title: 'Хоккей', boardId: 2 },
    { id: 6, title: 'Плавание', boardId: 3 }
];
