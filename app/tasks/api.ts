'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const submitAddTask = async (formData: FormData) => {
    const supabase = createClient();

    const title = formData.get('title') as string;

    const { error } = await supabase.from('tasks').insert({ title, boardId: 1 });

    if (error) {
        return redirect('/tasks?message=Could not add new task');
    }

    revalidatePath('/tasks');
};

export const newTaskMove = async (taskId: number, boardId: number) => {
    const supabase = createClient();

    const { error } = await supabase.from('tasks').update({ boardId }).eq('id', taskId);

    if (error) {
        return redirect('/tasks?message=Could not move task');
    }

    revalidatePath('/tasks');
};

export const deleteTask = async (taskId: number) => {
    const supabase = createClient();

    const { error } = await supabase.from('tasks').delete().eq('id', taskId);

    if (error) {
        return redirect('/tasks?message=Could not delete task');
    }

    revalidatePath('/tasks');
};
