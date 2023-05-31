import React from "react";
import Card from "./Card";

const AlbumList = ({ albumList, onAlbumClick, onEditClick }) => {
  const handleCardClick = (albumId) => {
    onAlbumClick(albumId);
  };

  const handleEditClick = (albumId) => {
    onEditClick(albumId);
  };

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {albumList.map((album, index) => (
        <Card
          key={album.id || index}
          albumId={album.id}
          albumTitle={album.title}
          albumArtist={album.artist}
          albumDescription={album.description}
          albumYear={album.year}
          buttonText="OK"
          imgURL={album.image}
          onCardClick={handleCardClick}
          onEditClick={handleEditClick}
        />
      ))}
    </div>
  );
};

export default AlbumList;
