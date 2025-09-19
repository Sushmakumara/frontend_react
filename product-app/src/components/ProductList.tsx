import React from 'react';
import { Product } from '../model/product';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
                  <p className="card-text">{product.description}</p>
                  <div className="mb-2">
                    {product.tags.map((tag: string, index: number) => (
                      <span key={index} className="badge bg-secondary me-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="card-text">
                    <strong>Price:</strong> ${product.price.toFixed(2)}
                  </p>
                  <p className="card-text">
                    <strong>Stock:</strong> {product.stock}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
