import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

console.log('=== React App Starting ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL || 'Not set');

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Root element found:', root);

root.render(<App />);

console.log('=== React App Rendered ===')
