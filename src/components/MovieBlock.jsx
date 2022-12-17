import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  BlockCardWrapper,
  BlockContainer,
  BlockName,
} from "../styles/movieBlock/MovieBlock.styles";

import { Card } from "./Card";

export const MovieBlock = ({ collection, category }) => {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    async function getMovieData() {
      await axios
        .get(
          `https://api.themoviedb.org/3/list/${collection}?api_key=30f57678d8753bc45e1c56e1ec4dcdf0&language=en-US`
        )
        .then((res) => {
          setMovieData(res.data.items);
        });
    }

    getMovieData();
  }, [collection]);

  return (
    <>
      <BlockContainer>
        <BlockName>{category}</BlockName>
        <BlockCardWrapper>
          <Card movieData={movieData} />
        </BlockCardWrapper>
      </BlockContainer>
    </>
  );
};
