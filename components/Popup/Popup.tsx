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
            className={`fixed inset-0 flex justify-center items-center 
      transition-colors ${open ? 'visible bg-black/20' : 'invisible'}
      `}
            onClick={onClose}>
            <div
                className={`bg-white min-w-96 rounded-lg shadow p-6
          transition-all max-w-md 
          ${open ? 'scale-100 opacity-100' : 'scale-110 opacitiy-0'}`}
                onClick={(e) => e.stopPropagation()}>
                <div>
                    <span className="text-black absolute top-3 left-2 font-extrabold">{title}</span>
                    <button
                        type="button"
                        className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={onClose}>
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                {/* <button
                    className="absolute top-2 right-2 py-1 px-2 
              border border-neutral-200 rounded-md text-gray-400
              bg-white hover:bg-gray-50 hover:text-gray-600"
                    onClick={onClose}>
                    X
                </button> */}
                <div className="mt-8">{children}</div>
            </div>
        </div>
    );
};

export default Popup;
