import React, { useState } from "react";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <svg
            key={index}
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill={index <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(0)}
            style={{ cursor: "pointer", marginRight: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .587l3.668 7.571L24 9.75l-6 5.85L19.336 24 12 19.896 4.664 24 6 15.6 0 9.75l8.332-1.592z" />
          </svg>
        );
      })}
      <p style={{ marginLeft: "10px" }}>Your Rating: {rating} out of {noOfStars}</p>
    </div>
  );
};

export default StarRating;
