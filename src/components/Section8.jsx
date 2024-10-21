import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../App.css';

const card = [
  {
    cardId: 1,
    backImg: "image/24.png",
    darkBackImg: "image/25.png",
  },
  {
    cardId: 2,
    backImg: "image/31.png",
    darkBackImg: "image/30.png",
  },
];

const Section8 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 1; // Displaying 1 card at a time
  const navigate = useNavigate(); // Initialize navigate

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

  // Function to handle navigation to NextPage with image data
  const handleDiscover = (Data) => {
    navigate("/nextPage", { state: { backgroundImage: Data.darkBackImg } });
  };

  return (
    <>
      <div className="section8 section">
        <div className="heading8">
          <div className="heading3 Chewy">Games</div>
          <p>Stay tuned for upcoming games!</p>
        </div>

        <div className="sec2Box sec8Box">
          <div className="arrowBtn" onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left" />
          </div>

          <div className="section2Cards">
            {card.slice(currentIndex, currentIndex + visibleCards).map((Data) => (
              <div
                className="section2Card section8Card"
                style={{ backgroundImage: `url(${Data.backImg})` }}
                key={Data.cardId}
              >
                <button
                  className="sec8Btn"
                  onClick={() => handleDiscover(Data)} // Trigger navigation on click
                >
                  DISCOVER <i className="fa-solid fa-arrow-right" />
                </button>
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

export default Section8;
