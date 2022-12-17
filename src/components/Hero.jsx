import React from "react";
import {
  BillboardText,
  BillboardTextContainer,
  BillboardWrapper,
} from "../styles/hero/Hero.styles";
import "../images/billboard.png";
import useWindowSize from "../helpers/useWindowDimension";

export const Hero = () => {
  const { width } = useWindowSize();

  return (
    <>
      <BillboardWrapper viewport={width}>
        <BillboardTextContainer viewport={width}>
          <BillboardText viewport={width}>
            Watch something incredible
          </BillboardText>
        </BillboardTextContainer>
      </BillboardWrapper>
    </>
  );
};
