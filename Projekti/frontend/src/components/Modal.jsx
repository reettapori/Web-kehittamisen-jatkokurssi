import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded shadow-lg p-6 w-96 z-60">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <div className="mb-4 text-black">{children}</div>
                <button onClick={onClose} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                    Sulje
                </button>
            </div>

        </div>
    );
};

export default Modal;
