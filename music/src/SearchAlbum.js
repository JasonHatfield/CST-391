import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AlbumList from './AlbumList';
import SearchForm from './SearchForm';
import { useNavigate } from 'react-router-dom';

const SearchAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get('http://localhost:5000/albums');
      setAlbums(response.data);
    } catch (error) {
      console.error(`Error fetching albums: ${error}`);
    }
  };

  const handleAlbumClick = (albumId) => {
    navigate(`/albums/${albumId}`);
  };

  const handleEditClick = (albumId) => {
    navigate(`/albums/${albumId}/edit`);
  };

  const handleSearchSubmit = (inputText) => {
    setSearchTerm(inputText);
  };

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <SearchForm onSubmit={handleSearchSubmit} />
      <AlbumList 
        albumList={filteredAlbums} 
        onAlbumClick={handleAlbumClick} 
        onEditClick={handleEditClick} 
      />
    </div>
  );
};

export default SearchAlbum;
