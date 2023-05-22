// Note that this is a deviation from the original examples. 
// All additional milestones should be modified to ensure consistency with the changes here.

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";
import AlbumList from "./AlbumList";
import NavBar from "./NavBar";
import OneAlbum from "./OneAlbum";
import "./App.css";
import dataSource from "./dataSource";

class App extends React.Component {
  state = {
    albumList: [],
    searchPhrase: "",
    currentlySelectedAlbumId: -1,
  };

  componentDidMount() {
    this.loadAlbums();
  }

  loadAlbums = async () => {
    const response = await dataSource.get("/albums");
    this.setState({ albumList: response.data });
  };

  updateSearchResults = async (phrase) => {
    console.log("phrase is " + phrase);
    this.setState({ searchPhrase: phrase });
    const response = await dataSource.get(
      `/albums/search/description/${phrase}`
    );
    this.setState({ albumList: response.data });
  };

  updateSingleAlbum = (id) => {
    console.log("Update Single Album =", id);
    let indexNumber = 0;
    for (let i = 0; i < this.state.albumList.length; ++i) {
      if (this.state.albumList[i].id === id) {
        indexNumber = i;
        break;
      }
    }
    const navigate = useNavigate();
    navigate(`/show/${indexNumber}`);
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="search-bar-container">
            <SearchForm onSubmit={this.updateSearchResults} />
          </div>
          <div className="container">
            <AlbumList
              albumList={this.state.albumList}
              onClick={this.updateSingleAlbum}
            />
          </div>
          <Routes>
            <Route
              path="/show/:albumId"
              element={
                <OneAlbum
                  album={
                    this.state.albumList[this.state.currentlySelectedAlbumId]
                  }
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
