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

    return (
        <div className="flex flex-col items-start">
            <AddTask />
            <Trello boards={boards} tasks={tasks.data as TaskType[]} />
        </div>
    );
};

export default Tasks;