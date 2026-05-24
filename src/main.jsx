import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Global error tracker to display on screen for easy debugging
window.addEventListener('error', (event) => {
  const rootEl = document.getElementById('root');
  if (rootEl) {
    const errDiv = document.createElement('div');
    errDiv.style.position = 'fixed';
    errDiv.style.top = '0';
    errDiv.style.left = '0';
    errDiv.style.right = '0';
    errDiv.style.background = '#fee2e2';
    errDiv.style.color = '#991b1b';
    errDiv.style.padding = '20px';
    errDiv.style.borderBottom = '4px solid #ef4444';
    errDiv.style.zIndex = '999999';
    errDiv.style.fontFamily = 'monospace';
    errDiv.style.whiteSpace = 'pre-wrap';
    errDiv.innerHTML = `<strong>Runtime Error:</strong><br/>${event.message}<br/>at ${event.filename}:${event.lineno}:${event.colno}<br/><br/><strong>Stack Trace:</strong><br/>${event.error?.stack || 'No stack trace available'}`;
    document.body.appendChild(errDiv);
  }
});

window.addEventListener('unhandledrejection', (event) => {
  const rootEl = document.getElementById('root');
  if (rootEl) {
    const errDiv = document.createElement('div');
    errDiv.style.position = 'fixed';
    errDiv.style.top = '0';
    errDiv.style.left = '0';
    errDiv.style.right = '0';
    errDiv.style.background = '#fef3c7';
    errDiv.style.color = '#92400e';
    errDiv.style.padding = '20px';
    errDiv.style.borderBottom = '4px solid #f59e0b';
    errDiv.style.zIndex = '999999';
    errDiv.style.fontFamily = 'monospace';
    errDiv.style.whiteSpace = 'pre-wrap';
    errDiv.innerHTML = `<strong>Unhandled Promise Rejection:</strong><br/>${event.reason?.message || event.reason || 'Unknown reason'}<br/><br/><strong>Stack:</strong><br/>${event.reason?.stack || 'No stack trace'}`;
    document.body.appendChild(errDiv);
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
