import React from "react";

const Modal = ({ onClose, content }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-64 p-6 rounded-lg">
        <h2 className="text-xl dark:text-black font-bold mb-4">message</h2>
        <p className="text-gray-700">{content}</p>
        <button
          className="px-4 py-2 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-900 focus:outline-none"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
