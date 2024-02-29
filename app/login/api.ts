'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { LoginFormType } from './types';

export const signIn = async (formData: LoginFormType) => {
    const supabase = createClient();

    const { error } = await supabase
        .from('users')
        .select()
        .match({ nickname: formData.nickname, password: formData.password })
        .single();

    if (error) {
        return redirect('/login?message=Could not authenticate user');
    }

    cookies().set('user', formData.nickname);

    // Router.reload();

    return redirect('/');
};

export const signUp = async (formData: LoginFormType) => {
    const supabase = createClient();

    const { error } = await supabase
        .from('users')
        .insert({ nickname: formData.nickname, password: formData.password });

    if (error) {
        return redirect('/login?message=Could not authenticate user');
    }

    cookies().set('user', formData.nickname);

    return redirect('/profile');
};
