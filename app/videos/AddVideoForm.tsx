'use client';

import Popup from '@/components/Popup/Popup';
import { useState } from 'react';
import { submitAddVideo } from './api';

const AddVideoForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="btn-primary" type="button">
                Добавить видео
            </button>
            <Popup title="Новое видео" open={isOpen} onClose={() => setIsOpen(false)}>
                <form action={submitAddVideo}>
                    <div>
                        <label className="mt-4 block text-sm font-medium text-gray-900 dark:text-white">
                            Номер серии
                        </label>
                        <input
                            name="episodeNumber"
                            type="number"
                            min={0}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
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
                        <button type="submit" className="btn-primary">
                            Добавить
                        </button>
                    </div>
                </form>
            </Popup>
        </>
    );
};

export default AddVideoForm;
