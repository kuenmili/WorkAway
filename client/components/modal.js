import React from "react";

const Modal = ({ onClose, content }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-64 p-1 rounded-lg">
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-900 focus:outline-none"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <img src="/img/Signuppana.png" alt="logo"></img>
        <h2 className="text-xl dark:text-black font-bold text-center mb-4">mensaje</h2>
        <p className="text-indigo-600 text-center mb-4">{content}</p>
      </div>
    </div>
  );
};

export default Modal;
;