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
        <form ref={formRef} action={addVideo} className="flex  flex-row gap-4 self-center">
            <div>
                <input
                    name="title"
                    placeholder="название задачи"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
            </div>
            <button type="submit" className="btn-primary">
                Добавить задачу
            </button>
        </form>
    );
};

export default AddTask;
