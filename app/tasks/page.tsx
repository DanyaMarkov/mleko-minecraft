import Trello from './Trello';
import { createClient } from '@/utils/supabase/server';
import { BoardType, TaskType } from './variables';
import AddTask from './AddTask';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'mleko/tasks',
    description: 'наши задачи и цели на сервере'
};

const Tasks = async () => {
    const supabase = createClient();

    const taskBoards = await supabase
        .from('taskBoards')
        .select('*')
        .order('id', { ascending: true });

    const tasks = await supabase.from('tasks').select('*').order('id', { ascending: true });

    const boards = (await taskBoards.data) as BoardType[];

    // попробовать серверную кнопку сделать
    const taskMove = async (taskId: number, boardId: number) => {
        'use server';
        const { error } = await supabase.from('tasks').update({ boardId }).eq('id', taskId);

        if (error) {
            return redirect('/tasks?message=Could not move task');
        }
        return redirect('/tasks');
    };

    return (
        <div>
            <AddTask />
            <Trello boards={boards} tasks={tasks.data as TaskType[]} />
        </div>
    );
};

export default Tasks;
