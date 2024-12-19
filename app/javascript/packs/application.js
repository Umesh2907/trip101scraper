import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductList from '../components/ProductList';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('react-app');
  if (element) {
    const root = ReactDOM.createRoot(element);
    root.render(<ProductList />);
  } else {
    console.error('Failed to find the target element for React');
  }
});

