import { ReactNode } from 'react';

type PopupProps = {
    open: boolean;
    title: string;
    onClose: () => void;
    children?: ReactNode;
};

const Popup = ({ open, title, onClose, children }: PopupProps) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}
            onClick={onClose}>
            <div
                className={`min-w-96 max-w-md rounded-lg bg-white p-6 shadow transition-all 
          ${open ? 'scale-100 opacity-100' : 'opacitiy-0 scale-110'}`}
                onClick={(e) => e.stopPropagation()}>
                <div>
                    <span className="absolute left-2 top-3 font-extrabold text-black">{title}</span>
                    <button
                        type="button"
                        className="absolute right-2 top-2 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={onClose}>
                        <svg
                            className="h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="mt-8">{children}</div>
            </div>
        </div>
    );
};

export default Popup;
