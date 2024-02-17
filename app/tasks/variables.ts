export type TaskType = {
    id: number;
    title: string;
};

export type BoardType = {
    id: number;
    title: string;
    items: TaskType[];
};

export const initialBoards: BoardType[] = [
    {
        id: 1,
        title: 'Сделать',
        items: [
            { id: 1, title: 'Пойти в магазин' },
            { id: 2, title: 'Погулять' },
            { id: 3, title: 'Пройти Ведьмак 3' }
        ]
    },
    {
        id: 2,
        title: 'В работе',
        items: [
            { id: 4, title: 'Футбол' },
            { id: 5, title: 'Волейбол' },
            { id: 6, title: 'Настольный теннис' }
        ]
    },
    {
        id: 3,
        title: 'Сделано',
        items: [{ id: 7, title: 'Апнуть Глобала' }]
    }
];
