import React from "react";
import './ProductDisplay.css'; // Ensure consistent styling

interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  category: string; // 
}

interface RelatedProductsProps {
  products: Product[];
  currentCategory: string;
  addToCart: (product: Product) => void;
  darkMode: boolean;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products, currentCategory, addToCart, darkMode }) => {
  // Filter products to find related ones based on the current category
  const relatedProducts = products.filter(product => product.category === currentCategory);

  return (
    <div className={`container mx-auto px-6 py-16 ${darkMode ? 'dark' : ''}`}>
      <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${darkMode ? 'dark' : ''}`}>You May Also Like</h2>
      <div className="product-grid"> {/* Use the same grid class for consistency */}
        {relatedProducts.map((product) => (
          <div key={product.id} className={`product-card ${darkMode ? 'dark' : ''}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className={`product-name ${darkMode ? 'dark' : ''}`}>{product.name}</h3>
            <div className="product-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={`star ${i < product.rating ? 'filled' : ''}`}>★</span>
              ))}
            </div>
            <p className={`product-price ${darkMode ? 'dark' : ''}`}>{product.price} RWF</p>
            <p className={`product-description ${darkMode ? 'dark' : ''}`}>{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className={`add-to-cart-button ${darkMode ? 'dark' : ''}`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
