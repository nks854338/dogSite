import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const card = [
  {
    cardId: 1,
    type: "pic",
    img: "image/4.png",
  },
  {
    cardId: 2,
    type: "pic",
    img: "image/5.png",
  },
  {
    cardId: 3,
    type: "pic",
    img: "image/6.png",
  },
  {
    cardId: 4,
    type: "pic",
    img: "image/7.png",
  },
  {
    cardId: 5,
    type: "pic",
    img: "image/8.png",
  },
  {
    cardId: 6,
    type: "pic",
    img: "image/9.png",
  },
  {
    cardId: 7,
    type: "video",
    img: "image/dog.gif",
  },
  {
    cardId: 8,
    type: "video",
    img: "image/dog1.gif",
  },
  {
    cardId: 9,
    type: "video",
    img: "image/dog3.gif",
  },
  {
    cardId: 10,
    type: "video",
    img: "image/dog1.gif",
  },
  {
    cardId: 11,
    type: "video",
    img: "image/dog3.gif",
  },
  {
    cardId: 12,
    type: "video",
    img: "image/dog.gif",
  },
];

const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all"); // Track the current filter
  const visibleCards = 3; // Number of cards visible at once
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle filtering based on card type
  const filteredCards = card.filter((item) => {
    if (filter === "all") return true;
    return filter === "photos" ? item.type === "pic" : item.type === "video";
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards >= filteredCards.length ? 0 : prevIndex + visibleCards
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredCards.length - visibleCards : prevIndex - visibleCards
    );
  };

  const handleCardClick = (img) => {
    navigate("/imageSlide", { state: { img } }); // Navigate to ImageSlide with image state
  };

  return (
    <div>
      <div className="section2 section">
        <div className="section2heading">
          <div className="sec2Btns">
            <div
              className={`sec2Btn btn1 ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </div>
            <div
              className={`sec2Btn btn2 ${filter === "photos" ? "active" : ""}`}
              onClick={() => setFilter("photos")}
            >
              Photos
            </div>
            <div
              className={`sec2Btn btn3 ${filter === "videos" ? "active" : ""}`}
              onClick={() => setFilter("videos")}
            >
              Videos
            </div>
          </div>
        </div>
        <div className="sec2Box">
          <div className="arrowBtn" onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left" />
          </div>
          <div className="section2Cards">
            {filteredCards.slice(currentIndex, currentIndex + visibleCards).map((Data) => (
              <div className="section2Card" key={Data.cardId}>
                <img 
                  src={Data.img} 
                  alt="" 
                  onClick={() => handleCardClick(Data.img)} // Add onClick for image
                />
              </div>
            ))}
          </div>
          <div className="arrowBtn" onClick={handleNext}>
            <i className="fa-solid fa-arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
