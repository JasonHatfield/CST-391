import React from "react";
import Card from "./Card";

const AlbumList = ({ albumList, onClick }) => {
  const handleSelectionOne = (albumId) => {
    console.log("Selected ID is " + albumId);
    onClick(albumId);
  };

  const albums = albumList.map((album, index) => (
    <Card
      key={album.id || index}
      albumId={album.id}
      albumTitle={album.title}
      albumDescription={album.description}
      buttonText="OK"
      imgURL={album.image}
      onClick={handleSelectionOne}
    />
  ));

  return <div className="container">{albums}</div>;
};

export default AlbumList;
