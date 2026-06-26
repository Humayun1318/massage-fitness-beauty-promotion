import { Loader2 } from 'lucide-react';

export function PageSkeleton() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <Loader2 
          size={48} 
          className="text-cyan-500 dark:text-cyan-400 animate-spin" 
          strokeWidth={2}
        />
        {/* Loading Text */}
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}