import React, { useState } from "react";
import '../App.css';

const card = [
  {
    cardId: 1,
    img: "image/11.png",
    backImg: "image/10.png",
  },
  {
    cardId: 2,
    img: "image/13.png",
    backImg: "image/12.png",
  },
  {
    cardId: 3,
    img: "image/15.png",
    backImg: "image/14.png",
  },
  {
    cardId: 4,
    img: "image/17.png",
    backImg: "image/16.png",
  },
];

const Section7 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 1;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards >= card.length ? 0 : prevIndex + visibleCards
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? card.length - visibleCards : prevIndex - visibleCards
    );
  };

  return (
    <>
      <div className="section7 section">
        <div className="heading3 Chewy">Merchandise</div>
        <div className="sec2Box">
          <div className="arrowBtn7" onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left" style={{ color: "#000831" }} />
          </div>

          {/* Card Display */}
          <div className="section2Cards">
            {card.slice(currentIndex, currentIndex + visibleCards).map((Data) => (
              <div
                className="section2Card section7Card"
                style={{ backgroundImage: `url(${Data.backImg})` }}
                key={Data.cardId}
              >
                <img src={Data.img} alt="" />
              </div>
            ))}
          </div>

          <div className="arrowBtn7" onClick={handleNext}>
            <i className="fa-solid fa-arrow-right" style={{ color: "#000831" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;
