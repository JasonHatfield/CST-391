import React from "react";

const OneAlbum = ({ album }) => {
  const handleButtonClick = (event) => {
    event.preventDefault();
    // Implement the functionality you want here
  };

  return (
    <div className="container">
      <h2>Album Details for {album.title}</h2>
      <div className="row">
        <div className="col col-sm-3">
          <div className="card">
            <img
              src={"../assets/images/" + album.image}
              className="card-img-top"
              alt={album.title}
            />
            <div className="card-body">
              <h5 className="card-title">{album.title}</h5>
              <p className="card-text">{album.description}</p>
              <div className="list-group">
                <li>Show the album's tracks here</li>
              </div>
              <button onClick={handleButtonClick} className="btn btn-primary">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="col col-sm-9">
          <div className="card">
            <p>Show the lyrics of select track here</p>
          </div>
          <div className="card">
            <p>Show the YouTube Video of select track here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneAlbum;
