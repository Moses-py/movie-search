import React, { useState } from "react";
import {
  Form,
  SearchbarWrapper,
  SearchBox,
  SearchBoxContainer,
  SearchText,
} from "../styles/searchbar/Searchbar.styles";

export const Searchbar = ({ search }) => {
  const [keyword, setKeyword] = useState();

  function handleInputChange(e) {
    let input = e.target.value;
    setKeyword(input);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    search(keyword);
  }

  return (
    <SearchbarWrapper>
      <SearchText>Search</SearchText>
      <SearchBoxContainer>
        <Form onSubmit={handleFormSubmit}>
          <SearchBox type="text" onChange={handleInputChange} />
        </Form>
      </SearchBoxContainer>
    </SearchbarWrapper>
  );
};
