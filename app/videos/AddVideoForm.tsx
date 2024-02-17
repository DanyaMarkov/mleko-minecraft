'use client';

import Popup from '@/components/Popup/Popup';
import { useState } from 'react';

const AddVideoForm = ({ addVideo }: { addVideo: (formData: FormData) => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                Добавить видео
            </button>
            <Popup title="Новое видео" open={isOpen} onClose={() => setIsOpen(false)}>
                <form action={addVideo}>
                    <div>
                        <label className="mt-4 block text-sm font-medium text-gray-900 dark:text-white">
                            Название серии
                        </label>
                        <input
                            name="title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="mt-4 block text-sm font-medium text-gray-900 dark:text-white">
                            Ссылка на серию
                        </label>
                        <input
                            name="link"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="mt-4 block  text-sm font-medium text-gray-900 dark:text-white">
                            Описание серии
                        </label>
                        <input
                            name="description"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="flex flex-row gap-4 py-4">
                        <button
                            type="submit"
                            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Добавить
                        </button>
                    </div>
                </form>
            </Popup>
        </>
    );
};

export default AddVideoForm;
