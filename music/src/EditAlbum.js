import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditAlbum = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/albums/${id}`);
        const albumData = response.data;

        if (!albumData) {
          setError('No album found with the provided ID.');
          return;
        }

        setTitle(albumData.title);
        setArtist(albumData.artist);
        setDescription(albumData.description);
        setYear(albumData.year);
        setImage(albumData.image);
      } catch (error) {
        setError(`Error fetching album: ${error}`);
        console.error(`Error fetching album: ${error}`);
      }
    };

    fetchAlbum();
  }, [id]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const updatedAlbum = {
      title: title,
      artist: artist,
      description: description,
      year: year,
      image: image,
    };

    try {
      await axios.put(`http://localhost:5000/albums/${id}`, updatedAlbum);
      navigate(`/albums/${id}`);
    } catch (error) {
      setError(`Error updating album: ${error}`);
      console.error(`Error updating album: ${error}`);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <form onSubmit={handleFormSubmit}>
        <h1>Edit Album</h1>
        <div className="form-group">
          <label htmlFor="albumTitle">Album Title</label>
          <input
            type="text"
            className="form-control"
            id="albumTitle"
            placeholder="Enter Album Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="albumArtist">Artist</label>
          <input
            type="text"
            className="form-control"
            id="albumArtist"
            placeholder="Enter Album Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <label htmlFor="albumDescription">Description</label>
          <textarea
            type="text"
            className="form-control"
            id="albumDescription"
            placeholder="Enter Album Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="albumYear">Year</label>
          <input
            type="text"
            className="form-control"
            id="albumYear"
            placeholder="Enter Album Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <label htmlFor="albumImage">Image</label>
          <input
            type="text"
            className="form-control"
            id="albumImage"
            placeholder="Enter Album Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div align="center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAlbum;
