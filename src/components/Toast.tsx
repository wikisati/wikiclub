"use client";

import React from 'react';

export type ToastType = 'success' | 'error' | 'info';

const toastColors: Record<ToastType, string> = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-primary-500',
};

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  return (
    <div className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded shadow-lg text-white ${toastColors[type]}`}> 
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200 focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast; 