import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const OneAlbum = ({ album, onDeleteClick }) => {
  const handleDeleteClick = (event) => {
    event.preventDefault();
    onDeleteClick(album.id);
  };

  return (
    <div className="container">
      {/* rest of the code */}
          <div className="card card-hover">
            {/* rest of the code */}
            <button onClick={handleDeleteClick} className="btn btn-danger">
              <i className="fa fa-trash"></i>
            </button>
            <Link to={`/albums/${album.id}/edit`} className="btn btn-primary">
              <i className="fa fa-pencil"></i>
            </Link>
          </div>
        {/* rest of the code */}
    </div>
  );
};

export default OneAlbum;
