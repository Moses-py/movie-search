import React from "react";

import { BlockName } from "../styles/movieBlock/MovieBlock.styles";
import {
  ResultContainer,
  ResultWrapper,
} from "../styles/searchResults/SearchResult.styles";

import { Card } from "./Card";

export const SearchResult = ({ movieData }) => {
  return (
    <>
      <ResultContainer>
        <BlockName>Search Result</BlockName>
        <ResultWrapper>
          <Card movieData={movieData} />
        </ResultWrapper>
      </ResultContainer>
    </>
  );
};
