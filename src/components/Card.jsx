import React from "react";
import {
  BlockCard,
  CardName,
  OverlayBlock,
} from "../styles/movieBlock/MovieBlock.styles";

export const Card = ({ movieData }) => {
  const image_base_url = "https://image.tmdb.org/t/p/original";

  return (
    <>
      {movieData &&
        movieData.map((movie) => {
          return (
            <BlockCard poster={image_base_url + movie.poster_path}>
              <OverlayBlock />
              <CardName>{movie.original_title}</CardName>
            </BlockCard>
          );
        })}
    </>
  );
};
