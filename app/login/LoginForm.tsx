'use client';

import { useForm } from 'react-hook-form';
import { signIn, signUp } from './api';

/* Функция валидации (чтобы пустая строка не прошла) */
const validateTrim = (value: string) => value.trim() !== '';

export type LoginFormType = {
    nickname: string;
    password: string;
};

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
            className="grid content-center w-min my-0 mx-auto">
            <div>
                <label className="mt-4 block text-sm font-medium text-white-900 dark:text-white">
                    Ваш никнейм:
                </label>
                <input
                    type="text"
                    placeholder="Ваш никнейм"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register('nickname', {
                        required: 'Обязательное поле',
                        validate: validateTrim
                    })}
                />
                <span className="text-red-600 text-sm italic">{errors.nickname?.message}</span>
            </div>
            <div>
                <label className="mt-4 block text-sm font-medium text-white-900 dark:text-white">
                    Пароль:
                </label>
                <input
                    type="password"
                    placeholder="Пароль"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register('password', {
                        required: 'Обязательное поле',
                        validate: validateTrim
                    })}
                />
                <span className="text-red-600 text-sm italic">{errors.password?.message}</span>
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
