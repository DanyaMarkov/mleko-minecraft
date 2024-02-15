'use client';

import { createClient } from '@/utils/supabase/server';
import { SubmitHandler, useForm } from 'react-hook-form';
import { cookies } from 'next/headers';
import { LoginFormInputsType } from './types';

const defaultValues = {
    nickname: '',
    password: ''
};

const LoginForm = ({ create }: { create: SubmitHandler<LoginFormInputsType> }) => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<LoginFormInputsType>({
        defaultValues
    });

    return (
        <form onSubmit={handleSubmit(create)}>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ваш никнейм:
                </label>
                <input
                    {...register('nickname', { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Пароль:
                </label>
                <input
                    {...register('password', { required: true })}
                    type="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            <button type="submit">Войти</button>
        </form>
    );
};

export default LoginForm;
