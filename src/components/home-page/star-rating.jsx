// StarRating.js
import React from 'react';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating); // Round the rating to the nearest integer
  const emptyStars = totalStars - filledStars;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <span key={`filled-${index}`} className="text-2xl">&#9733;</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-2xl">&#9734;</span>
      ))}
    </div>
  );
};

export default StarRating;
