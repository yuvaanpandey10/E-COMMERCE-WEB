import { useEffect } from "react";
import { Link } from "react-router";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page not found | Shopsy";
  }, []);

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-6xl font-bold text-secondary sm:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Page not found</h1>
      <p className="mt-2 text-gray-500 dark:text-gray-300">
        The page you are looking for doesn't exist or was moved.
      </p>
      <Link to="/" className="mt-6 rounded-full bg-secondary px-6 py-2 font-medium text-white duration-200 hover:scale-105">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;