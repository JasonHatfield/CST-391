import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  albumId,
  albumTitle,
  albumArtist,
  albumDescription,
  albumYear,
  buttonText,
  imgURL,
  onCardClick,
  onEditClick,
}) => {
  const handleCardClick = () => {
    onCardClick(albumId);
  };

  const handleEditClick = (event) => {
    event.stopPropagation();
    onEditClick(albumId);
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card h-100" onClick={handleCardClick}>
        <img src={imgURL} className="card-img-top" alt={albumTitle} />
        <div className="card-body">
          <h5 className="card-title">{albumTitle}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{albumArtist}</h6>
          <p className="card-text">{albumDescription}</p>
          <p className="card-text">
            <small className="text-muted">Year: {albumYear}</small>
          </p>
          <div className="d-flex justify-content-between">
            <Link
              to={`/albums/${albumId}`}
              className="btn btn-primary"
            >
              {buttonText}
            </Link>
            <button
              className="btn btn-secondary"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
