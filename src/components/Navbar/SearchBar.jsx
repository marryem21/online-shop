import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  ${"" /* background-color: transparent; */}
  background-color: #efefef;
  height: 15%;
  width: 15%;
  padding: 1.5% 3% 1.5% 4%;
  margin: 0.1% 0 0 0;
  color: black;
  font-size: 10px;
  border: none;
  background-image: url("searchicon.png");
  background-position: 6% 40%;
  background-repeat: no-repeat;
  background-size: 9%;
  border-radius: 8px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;

  ::placeholder {
    color: #6c6c6c;
    font-size: 13px;
    padding: 13px;
  }

  :focus {
    outline: none;
    width: 45%;
    padding: 1.5% 3% 1.5% 8%;
    background-size: 5%;
    background-position: 4% 45%;
    font-size: 13px;
  }
`;
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBar;
