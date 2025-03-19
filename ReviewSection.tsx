import React, { useState } from "react";
import './ReviewSection.css'; // Import the CSS file

interface Review {
  text: string;
}

interface ReviewSectionProps {
  reviews: Review[];
  submitReview: (review: Review) => void;
  darkMode: boolean;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews, submitReview, darkMode }) => {
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewText.trim()) {
      submitReview({ text: reviewText });
      setReviewText("");
    }
  };

  return (
    <div className={`review-section ${darkMode ? 'dark' : ''}`}>
      <h2 className={`review-title ${darkMode ? 'dark' : ''}`}>Customer Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index} className={`review-card ${darkMode ? 'dark' : ''}`}>
            <p className={`review-comment ${darkMode ? 'dark' : ''}`}>{review.text}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write a review..."
          className={`review-textarea ${darkMode ? 'dark' : ''}`}
        />
        <button type="submit" className={`submit-review-button ${darkMode ? 'dark' : ''}`}>Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewSection;
