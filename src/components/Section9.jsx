import React, {useState} from "react";
import '../App.css';

const card = [
  {
    cardId: 1,
    img: "image/27.png",
  },
  {
    cardId: 2,
    img: "image/28.png",
  },
  {
    cardId: 3,
    img: "image/29.png",
  },
  {
    cardId: 4,
    img: "image/26.png",
  },
  {
    cardId: 5,
    img: "image/20.png",
  },
  {
    cardId: 6,
    img: "image/21.png",
  },
  {
    cardId: 7,
    img: "image/22.png",
  },
  {
    cardId: 8,
    img: "image/19.png",
  },
  {
    cardId: 9,
    img: "image/29.png",
  },
];

const Section9 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

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
      <div className="section9 section">
        <div className="section2heading">
          <div className="sec9heading">
            GAME <span>PREVIEWS</span>
          </div>
        </div>
        <div className="sec2Box">
          <div className="arrowBtn"  onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left" />
          </div>
          <div className="section2Cards">
            {card
              .slice(currentIndex, currentIndex + visibleCards)
              .map((Data) => (
                <div className="section2Card section9Card" key={Data.cardId}>
                  <img src={Data.img} alt="" />
                </div>
              ))}
          </div>
          <div className="arrowBtn" onClick={handleNext}>
            <i className="fa-solid fa-arrow-right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section9;
