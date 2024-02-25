import Trello from './Trello';
import { createClient } from '@/utils/supabase/server';
import { BoardType, TaskType } from './variables';
import AddTask from './AddTask';
import { Metadata } from 'next';
import { headers } from 'next/headers';

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
        <div className="flex flex-col items-center">
            <AddTask />
            <Trello
                boards={boards}
                tasks={tasks.data as TaskType[]}
                userAgentData={headers().get('user-agent') ?? ''}
            />
        </div>
    );
};

export default Tasks;
