'use client';

import Popup from '@/components/Popup/Popup';
import React, { useState } from 'react';
import { createTopic } from './api';
import { useForm } from 'react-hook-form';
import { CreateTopicFormType } from './types';
import { validateTrim } from '@/global/utils';

const createTopicDefaultValues = {
    title: '',
    comment: ''
};

const AddTopic = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<typeof createTopicDefaultValues>();

    const submitAuthorization = (formData: CreateTopicFormType) => {
        createTopic(formData);
        reset({ ...createTopicDefaultValues });
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="btn-primary" type="button">
                Добавить тему
            </button>

            <Popup title="Новая тема" open={isOpen} onClose={() => setIsOpen(false)}>
                <form
                    onSubmit={handleSubmit(submitAuthorization)}
                    className="mx-auto my-0 grid w-full content-center">
                    <div>
                        <label className="mt-4 block text-sm font-medium text-black ">Тема</label>
                        <input
                            type="text"
                            placeholder="Название темы обсуждения"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            {...register('title', {
                                required: 'Обязательное поле',
                                validate: validateTrim
                            })}
                        />
                        <span className="text-sm italic text-red-600">{errors.title?.message}</span>
                    </div>
                    <div>
                        <label className="mt-4 block text-sm font-medium text-black">
                            Комментарий:
                        </label>
                        <textarea
                            placeholder="Первый комментарий"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            {...register('comment', {
                                required: 'Обязательное поле',
                                validate: validateTrim
                            })}
                            rows={6}
                        />
                        <span className="text-sm italic text-red-600">
                            {errors.comment?.message}
                        </span>
                    </div>
                    <div className="flex flex-row gap-4 py-4">
                        <button type="submit" className="btn-primary">
                            Создать
                        </button>
                    </div>
                </form>
            </Popup>
        </>
    );
};

export default React.memo(AddTopic);
