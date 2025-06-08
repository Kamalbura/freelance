import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { ThemeProvider } from './contexts/ThemeContext'
import { initializePerformanceMonitoring } from './utils/performance.js'
import { ResourceHints } from './hooks/usePreloader.js'
import PerformanceDashboard from './components/ui/PerformanceDashboard'
import AccessibilityEnhancements from './components/ui/AccessibilityEnhancements'
import CompletionStatus from './components/ui/CompletionStatus'

// Initialize performance monitoring
initializePerformanceMonitoring()

// Register service worker
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ErrorBoundary>
        <AccessibilityEnhancements />
        <ResourceHints />
        <RouterProvider router={router} />
        <PerformanceDashboard />
        <CompletionStatus />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>,
)
