import React from "react";
import { MovieBlock } from "./MovieBlock";

export const MovieShowcase = () => {
  return (
    <>
      <MovieBlock collection={1} category="Action" />
      <MovieBlock collection={2} category="Drama" />
    </>
  );
};
