import React from 'react';
import { Outlet } from 'react-router-dom';
import SimpleHeader from '../SimpleHeader';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <SimpleHeader />
      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
