"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

const colors = {
  success: 'bg-green-500 dark:bg-green-600',
  error: 'bg-red-500 dark:bg-red-600',
  info: 'bg-primary-500 dark:bg-primary-600',
};

export default function Toast({ message, type, onClose, duration = 3000 }: ToastProps) {
  const Icon = icons[type];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className={`fixed bottom-4 right-4 flex items-center p-4 rounded-lg shadow-lg text-white ${colors[type]} backdrop-blur-sm`}
      >
        <Icon className="w-5 h-5 mr-2" />
        <p className="mr-4 font-medium">{message}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="ml-auto focus:outline-none hover:bg-white/10 rounded-full p-1 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
} 