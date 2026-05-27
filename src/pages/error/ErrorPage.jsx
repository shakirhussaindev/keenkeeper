import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-6">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-bold text-[#1F4D45]">404</h1>

        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3">
          The page you are looking for does not exist.
        </p>

        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-[#1F4D45] text-white rounded-lg hover:opacity-90 duration-300">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
