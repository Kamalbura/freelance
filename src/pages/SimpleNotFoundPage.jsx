import React from 'react';
import { Link } from 'react-router-dom';

const SimpleNotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 pt-20">
      <div className="text-center text-white">
        <h1 className="text-9xl font-extrabold tracking-widest mb-4">404</h1>
        <p className="text-2xl text-slate-300 mb-8">Page Not Found</p>
        <Link 
          to="/" 
          className="bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default SimpleNotFoundPage;
