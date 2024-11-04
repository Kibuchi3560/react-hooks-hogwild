import React, { useState } from "react";

function HogItem({ hog }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showCard, setShowCard] = useState(true);

  const displayDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  const hideCard = (e) => {
    e.stopPropagation();
    setShowCard(false);
  };

  
  return showCard ? (
    <div className="ui grid container">
    <div className="ui eight wide column">
        <div className="ui card">
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <a className="header">{hog.name}</a>
        <div className="description">
          <button onClick={hideCard}>Hide</button>
          <button onClick={() =>  displayDetails() }>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
          {showDetails && (
            <ul>
              <li>Specialty: {hog.specialty}</li>
              <li>Weight: {hog.weight}</li>
              <li>Greased: {hog.greased ? "Yes" : "No"}</li>
              <li>Highest Medal Achieved: {hog["highest medal achieved"]}</li>
            </ul>
          )}
        </div>
      </div>
      </div>
    </div>
    </div>
  ) : null;
}

export default HogItem;
