import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { router } from '@/routes';
import { ErrorBoundary } from 'react-error-boundary';

// This is the ErrorFallback component - it shows when there's an error
const ErrorFallback = ({ error, resetErrorBoundary }: any) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-slate-900">
    <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Something went wrong
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {error?.message || 'An unexpected error occurred'}
      </p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
      >
        Try Again
      </button>
    </div>
  </div>
);

function App() {
  return (
    // ErrorBoundary wraps the entire app - it catches errors anywhere
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </ErrorBoundary>
  );
}

export default App;
