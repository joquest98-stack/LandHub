// Import necessary libraries from React and ReactDOM.
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the main application component.
import App from './App';

// Find the root DOM element where the React app will be mounted.
const rootElement = document.getElementById('root');
// Ensure the root element exists before trying to render the app.
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Create a React root for the concurrent mode API.
const root = ReactDOM.createRoot(rootElement);
// Render the main App component wrapped in StrictMode for development checks.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
