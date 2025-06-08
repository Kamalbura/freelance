// Temporary debug main.jsx to isolate the issue
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function DebugApp() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Debug Test</h1>
      <p className="text-xl mb-2">✅ React is working!</p>
      <p className="text-lg mb-2">✅ Tailwind is working!</p>
      <p className="text-sm text-gray-400">Timestamp: {new Date().toISOString()}</p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Testing imports...</h2>
        <p>🔍 Checking if this renders properly...</p>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DebugApp />
  </StrictMode>,
)
