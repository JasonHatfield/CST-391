import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AlbumDetails = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/albums/${id}`);
        setAlbum(response.data);
      } catch (error) {
        console.error(`Error fetching album: ${error}`);
      }
    };

    fetchAlbum();
  }, [id]);

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div className="album-details">
      <img src={album.image} alt={album.title} />
      <h2>{album.title}</h2>
      <p>{album.description}</p>
      {/* You can add more details here as needed */}
    </div>
  );
};

export default AlbumDetails;
