import "./styles.css";
import { FaStar } from "react-icons/fa";
import React, { useState } from "react";

export default function StarRating({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    // console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    // console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    // console.log(getCurrentIndex);
    setHover(rating);
  }
  function handleReset() {
    setRating(0);
    setHover(0);
  }
  return (
    <div className="starRating">
      <div className="stars">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
      <button className={"resetBtn"} onClick={handleReset}>
        Reset Rating
      </button>
    </div>
  );
}
