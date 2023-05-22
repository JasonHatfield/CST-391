import React from "react";

const Card = ({ albumId, albumTitle, albumDescription, buttonText, imgURL, onClick }) => {
  const handleButtonClick = (event) => {
    event.preventDefault();
    console.log("ID clicked is " + albumId);
    onClick(albumId);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgURL} className="card-img-top" alt="Test Name" />
      <div className="card-body">
        <h5 className="card-title">{albumTitle}</h5>
        <p className="card-text">{albumDescription}</p>
        <button onClick={handleButtonClick} className="btn btn-primary">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
