import React, { useState, useEffect } from "react";
import ProductDisplay from "../components/ProductDisplay";
import RelatedProducts from "../components/RelatedProducts";
import ReviewSection from "../components/ReviewSection";
import DarkModeToggle from "../components/DarkModeToggle";
import './Homepage.css';

interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  category: string;
}

interface Review {
  text: string;
}

const HomePage = ({ searchQuery, addToCart, darkMode, setDarkMode }: { searchQuery: string; addToCart: (product: any) => void; darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter(
    (product: Product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentCategory = "Electronics"; // Example category, adjust as needed

  const submitReview = (review: Review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <ProductDisplay addToCart={addToCart} products={filteredProducts} darkMode={darkMode} />
      <RelatedProducts products={products} currentCategory={currentCategory} addToCart={addToCart} darkMode={darkMode} />
      <ReviewSection reviews={reviews} submitReview={submitReview} darkMode={darkMode} /> {/* Pass darkMode */}
    </div>
  );
};

export default HomePage;
