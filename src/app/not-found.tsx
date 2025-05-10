export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">Page Not Found</p>
      <a href="/" className="text-primary-600 hover:underline">Go Home</a>
    </div>
  );
} 