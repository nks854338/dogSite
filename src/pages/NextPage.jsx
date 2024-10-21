import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import '../App.css';

const NextPage = () => {
  const location = useLocation(); // Access passed state
  const backgroundImage = location.state?.backgroundImage; // Get the background image

  return (
    <>
      <div className="nextPage" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="nextSection1">
          <div className="nextHero">
            <div className="rightHeroContent">
              <div className="nextHeading">
                ALABAY HERITAGE
                <div className="nextSpan">THE LOST ADVENTURE</div>
              </div>
              <div className="nextPara">
                Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
              </div>
              <button className="playBtn">
                <i className="fa-solid fa-circle-play"></i> Play
              </button>
            </div>
          </div>
          <div className="rightHero"></div>
        </div>

        <div className="nextSection2">
          <div className="sectionnextheading">
            <div className="secnextheading">
              GAME <span>PREVIEWS</span>
            </div>
          </div>

          <div className="nextPageCards">
            <div className="nextPageCard">
              <img src="image/33.png" alt="" />
            </div>
            <div className="nextPageCard">
              <img src="image/20.png" alt="" />
            </div>
            <div className="nextPageCard">
              <img src="image/29.png" alt="" />
            </div>
            <div className="nextPageCard">
              <img src="image/32.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextPage;
