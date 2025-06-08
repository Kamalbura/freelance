import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import { PageLoader } from '../ui/LoadingSpinner';

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default MainLayout;
