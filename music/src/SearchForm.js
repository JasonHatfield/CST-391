import React, { useState } from "react";
import './App.css';

const SearchForm = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");

  const handleChangeInput = (event) => {
    setInputText(event.target.value);
    console.log(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputText);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input type="text" className="form-control smaller-input" placeholder="Enter your search here" onChange={handleChangeInput} />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
