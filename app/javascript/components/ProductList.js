import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = () => {
  // State to manage products and the new product being added
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    url: ''
  });

  // Fetch existing products from the API
  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Handle form submission to create a new product
  const handleCreateProduct = (e) => {
    e.preventDefault();

    // Check if all fields are filled out
    if (
      !newProduct.title ||
      !newProduct.description ||
      !newProduct.price ||
      !newProduct.category ||
      !newProduct.url
    ) {
      alert('Please fill out all fields');
      return;
    }

    const product = {
      title: newProduct.title,
      description: newProduct.description,
      price: newProduct.price,
      category: newProduct.category,
      url: newProduct.url
    };

    // Make a POST request to your API to create a new product
    // Example:
    fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()).then(newProduct => {
      setProducts([...products, newProduct]);
    });

    // Mock adding the new product to the list for now
    setProducts([...products, { id: products.length + 1, ...product }]);
    setNewProduct({ title: '', description: '', price: '', category: '', url: '' });  // Reset the form fields
  };

  return (
    <div className="product-list-container">
      <h1 className="page-title">Product List</h1>

      <div className="create-product-form">
        <h3>Create New Product</h3>
        <form onSubmit={handleCreateProduct} className="form">
          <input
            type="text"
            placeholder="Product Title"
            value={newProduct.title}
            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            className="form-input"
          />
          <textarea
            placeholder="Product Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="form-textarea"
          />
          <input
            type="number"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Product Category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Product URL"
            value={newProduct.url}
            onChange={(e) => setNewProduct({ ...newProduct, url: e.target.value })}
            className="form-input"
          />
          <button type="submit" className="form-button">Create Product</button>
        </form>
      </div>

      <div className="product-list">
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <p className="product-category">Category: {product.category}</p>
              <p className="product-url">URL: <a href={product.url} target="_blank" rel="noopener noreferrer">{product.url}</a></p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
