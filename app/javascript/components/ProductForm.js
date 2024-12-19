import React, { useState } from 'react';

const ProductForm = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/scrape_product', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Product scraped successfully!');
    } else {
      alert('Failed to scrape product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter product URL"
      />
      <button type="submit">Scrape</button>
    </form>
  );
};

export default ProductForm;
