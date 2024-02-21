'use client';

import { useRef } from 'react';
import { submitAddTask } from './api';

const AddTask = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const addVideo = async (formData: FormData) => {
        submitAddTask(formData);
        if (formRef) {
            formRef?.current?.reset();
        }
    };

    return (
        <form ref={formRef} action={addVideo} className="flex w-full flex-row gap-4">
            <div>
                <input
                    name="title"
                    placeholder="название задачи"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <button type="submit" className="btn-primary">
                Добавить задачу
            </button>
        </form>
    );
};

export default AddTask;
