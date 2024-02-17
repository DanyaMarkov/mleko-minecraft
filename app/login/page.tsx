import { createClient } from '@/utils/supabase/server';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormInputsType } from './types';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const Login = async () => {
    const signIn = async (formData: FormData) => {
        'use server';
        const supabase = createClient();

        const nickname = formData.get('nickname') as string;
        const password = formData.get('password') as string;

        console.log('password ===', password);

        const { error } = await supabase
            .from('users')
            .select()
            .match({ nickname: nickname, password: password })
            .single();

        if (error) {
            return redirect('/login?message=Could not authenticate user');
        }

        cookies().set('user', nickname);
        return redirect('/');
    };

    const signUp = async (formData: FormData) => {
        'use server';
        const supabase = createClient();

        const nickname = formData.get('nickname') as string;
        const password = formData.get('password') as string;

        console.log('password ===', password);

        const { error, data: response } = await supabase
            .from('users')
            .insert({ nickname: nickname, password: password });

        if (error) {
            return redirect('/login?message=Could not authenticate user');
        }

        cookies().set('user', nickname);
        return redirect('/profile');
    };

    return (
        <form
            // onSubmit={signIn}
            action={signIn}>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ваш никнейм:
                </label>
                <input
                    name="nickname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Пароль:
                </label>
                <input
                    name="password"
                    type="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="flex flex-row gap-4 py-4">
                <button
                    type="submit"
                    className="border border-foreground/20 rounded-md px-4 py-2 mb-2">
                    Войти
                </button>
                <button
                    formAction={signUp}
                    className="border border-foreground/20 rounded-md px-4 py-2 mb-2">
                    Зарегистрироваться
                </button>
            </div>
        </form>
    );
};

export default Login;
