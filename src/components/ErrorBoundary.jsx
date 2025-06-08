import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error details
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a', // slate-900
          padding: '1rem',
          fontFamily: 'sans-serif',
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '448px', // max-w-md
          }}>
            <div style={{
              fontSize: '3.75rem', // text-6xl
              marginBottom: '1.5rem', // mb-6
            }}>⚠️</div>
            <h1 style={{
              fontSize: '1.5rem', // text-2xl
              fontWeight: 'bold',
              color: '#ffffff', // text-white
              marginBottom: '1rem', // mb-4
            }}>
              Something went wrong
            </h1>
            <p style={{
              color: '#cbd5e1', // text-slate-300
              marginBottom: '1.5rem', // mb-6
            }}>
              The application encountered an unexpected error. Please try refreshing the page.
            </p>
            {this.state.error && (
              <div style={{
                backgroundColor: '#1e293b', // bg-slate-800
                padding: '1rem', // p-4
                borderRadius: '0.5rem', // rounded-lg
                textAlign: 'left',
                marginBottom: '1.5rem', // mb-6
                maxHeight: '200px',
                overflowY: 'auto',
                wordBreak: 'break-all',
              }}>
                <p style={{
                  color: '#f87171', // text-red-400
                  fontSize: '0.875rem', // text-sm
                  fontFamily: 'monospace',
                }}>
                  {this.state.error.toString()}
                </p>
                {this.state.errorInfo && this.state.errorInfo.componentStack && (
                  <details style={{ marginTop: '0.5rem' }}>
                    <summary style={{ color: '#94a3b8', cursor: 'pointer' }}>Component Stack</summary>
                    <pre style={{
                      color: '#f87171', // text-red-400
                      fontSize: '0.75rem', // text-xs
                      fontFamily: 'monospace',
                      whiteSpace: 'pre-wrap',
                    }}>
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}
            <button
              onClick={() => window.location.reload()}
              style={{
                paddingLeft: '1.5rem', // px-6
                paddingRight: '1.5rem',
                paddingTop: '0.75rem', // py-3
                paddingBottom: '0.75rem',
                backgroundColor: '#2563eb', // bg-blue-600
                color: '#ffffff', // text-white
                fontWeight: '600', // font-semibold
                borderRadius: '0.5rem', // rounded-lg
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'} // hover:bg-blue-700
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
