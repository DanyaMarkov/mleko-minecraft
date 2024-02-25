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
                        <label className="mt-4 block text-sm font-medium text-gray-900 ">
                            Номер серии
                        </label>
                        <input
                            name="episodeNumber"
                            type="number"
                            min={0}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="mt-4 block text-sm font-medium text-gray-900 ">
                            Название серии
                        </label>
                        <input
                            name="title"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="mt-4 block text-sm font-medium text-gray-900 ">
                            Ссылка на серию
                        </label>
                        <input
                            name="link"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600   dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="mt-4 block  text-sm font-medium text-gray-900 ">
                            Описание серии
                        </label>
                        <input
                            name="description"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600   dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
