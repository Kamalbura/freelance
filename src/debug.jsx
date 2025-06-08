// Simple debug component to test if React is working
import React from 'react'
import { createRoot } from 'react-dom/client'

function DebugApp() {
  return (
    <div style={{ padding: '20px', fontSize: '18px' }}>
      <h1>Debug Test</h1>
      <p>If you can see this, React is working!</p>
      <p>Timestamp: {new Date().toISOString()}</p>
    </div>
  )
}

// Test if we can render a simple component
createRoot(document.getElementById('root')).render(<DebugApp />)
