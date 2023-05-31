import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SearchAlbum from './SearchAlbum';
import NewAlbum from './NewAlbum';
import AlbumDetails from './AlbumDetails';
import EditAlbum from './EditAlbum';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<SearchAlbum />} />
          <Route path="/new" element={<NewAlbum />} />
          <Route path="/albums/:id" element={<AlbumDetails />} />
          <Route path="/albums/:id/edit" element={<EditAlbum />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
