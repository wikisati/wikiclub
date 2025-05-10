"use client";

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// export function SkeletonLoader() {
//   return (
//     <div className="animate-pulse space-y-4">
//       <div className="h-4 bg-gray-200 rounded w-3/4" />
//       <div className="space-y-2">
//         <div className="h-4 bg-gray-200 rounded" />
//         <div className="h-4 bg-gray-200 rounded w-5/6" />
//       </div>
//     </div>
//   );
// }

// export function PageLoader() {
//   return (
//     <div className="fixed inset-0 bg-gray-50 z-50 flex items-center justify-center">
//       <div className="text-center">
//         <div
//           className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full mx-auto animate-spin"
//         />
//         <p className="mt-4 text-gray-600 font-display">
//           Loading...
//         </p>
//       </div>
//     </div>
//   );
// } 