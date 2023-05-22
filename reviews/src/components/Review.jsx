import React, { useState } from "react";
import reviews from "../data";
import "../index.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  const nextReview = () => {
    setIndex((index) => {
      let newIndex = checkNumber(index + 1);
      console.log("newIndex ", newIndex);
      return newIndex;
    });
  };

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = checkNumber(index - 1);
      console.log(newIndex);
      return newIndex;
    });
  };
  const randomReview = () => {
    let newIndex = Math.floor(Math.random() * reviews.length);
    if (newIndex === index) {
      newIndex = checkNumber(index + 1);
    }
    setIndex(newIndex);
  };
  const checkNumber = (index) => {
    if (index > reviews.length - 1) {
      return 0;
    } else if (index < 0) {
      return reviews.length - 1;
    } else {
      return index;
    }
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        Surpise me
      </button>
    </article>
  );
}

export default Review;
