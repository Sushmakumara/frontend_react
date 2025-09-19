import React, { useState } from 'react';
import { Product } from '../model/product'; // adjust path if needed

const AddProduct: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: '',
    description: '',
    category: '',
    tags: [],
    price: 0,
    stock: 0,
  });

  // For handling tags input (comma separated)
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tagsString = e.target.value;
    const tagsArray = tagsString.split(',').map(tag => tag.trim());
    setProduct(prev => ({ ...prev, tags: tagsArray }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // For numeric fields convert to number
    const parsedValue =
      name === 'id' || name === 'price' || name === 'stock'
        ? Number(value)
        : value;

    setProduct(prev => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you can add your logic to save the product (e.g., API call)
    console.log('Product to add:', product);

    // Clear form after submit
    setProduct({
      id: 0,
      name: '',
      description: '',
      category: '',
      tags: [],
      price: 0,
      stock: 0,
    });
  };

  return (
    <div className="container mt-4">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID</label>
          <input
            type="number"
            className="form-control"
            id="id"
            name="id"
            value={product.id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            rows={3}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Tags (comma separated)</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            onChange={handleTagsChange}
            value={product.tags.join(', ')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price ($)</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="stock" className="form-label">Stock Quantity</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
