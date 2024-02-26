'use client';

import { useForm } from 'react-hook-form';
import { signIn, signUp } from './api';
import { LoginFormType } from './types';
import { validateTrim } from '@/global/utils';

const loginFormDefaultValues: LoginFormType = {
    nickname: '',
    password: ''
};

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<typeof loginFormDefaultValues>();

    const submitAuthorization = (formData: LoginFormType) => {
        signIn(formData);
        reset({ ...loginFormDefaultValues });
    };

    const submitRegistration = (formData: LoginFormType) => {
        signUp(formData);
        reset({ ...loginFormDefaultValues });
    };

    return (
        <form
            onSubmit={handleSubmit(submitAuthorization)}
            className="mx-auto my-0 grid w-min content-center">
            <div>
                <label className="text-white-900 mt-4 block text-sm font-medium dark:text-white">
                    Ваш никнейм:
                </label>
                <input
                    type="text"
                    placeholder="Ваш никнейм"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    {...register('nickname', {
                        required: 'Обязательное поле',
                        validate: validateTrim
                    })}
                />
                <span className="text-sm italic text-red-600">{errors.nickname?.message}</span>
            </div>
            <div>
                <label className="text-white-900 mt-4 block text-sm font-medium dark:text-white">
                    Пароль:
                </label>
                <input
                    type="password"
                    placeholder="Пароль"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    {...register('password', {
                        required: 'Обязательное поле',
                        validate: validateTrim
                    })}
                />
                <span className="text-sm italic text-red-600">{errors.password?.message}</span>
            </div>
            <div className="flex flex-row gap-4 py-4">
                <button type="submit" className="btn-primary">
                    Войти
                </button>
                <button onClick={handleSubmit(submitRegistration)} className="btn-primary">
                    Зарегистрироваться
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
