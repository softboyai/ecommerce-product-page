import React, { useState } from "react";
import './ProductDisplay.css'; // Ensure the CSS file is imported

interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  rating: number;
}

interface ProductDisplayProps {
  products: Product[];
  addToCart: (product: Product) => void;
  darkMode: boolean;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ products, addToCart, darkMode }) => {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  const handleRatingClick = (productId: string, rating: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: rating,
    }));
  };

  return (
    <div className={`product-grid ${darkMode ? 'dark' : ''}`}>
      {products.map((product) => (
        <div key={product.id} className={`product-card ${darkMode ? 'dark' : ''}`}>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3 className={`product-name ${darkMode ? 'dark' : ''}`}>{product.name}</h3>
            <div className="product-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`star ${i < (ratings[product.id] || product.rating) ? 'filled' : ''}`}
                  onClick={() => handleRatingClick(product.id, i + 1)}
                  style={{ cursor: 'pointer' }} // Make stars clickable
                >
                  ★
                </span>
              ))}
            </div>
            <p className={`product-price ${darkMode ? 'dark' : ''}`}>{product.price} RWF</p>
            <p className={`product-description ${darkMode ? 'dark' : ''}`}>{product.description}</p>
            <button 
              className={`add-to-cart-button ${darkMode ? 'dark' : ''}`} 
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
