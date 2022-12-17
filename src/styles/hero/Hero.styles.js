import styled from "styled-components";
import img from "../../images/billboard.png";

export const BillboardContainer = styled.div``;

export const BillboardWrapper = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  @media (max-width: 880px) {
    justify-content: center;
  }
`;
export const BillboardImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const BillboardTextContainer = styled.div`
  padding: 0 77px;
  width: 490px;
`;
export const BillboardText = styled.h1`
  font-size: ${(props) => (props.viewport < 480 ? "28px" : "72px")};
  text-align: ${(props) => (props.viewport < 990 ? "center" : "left")};
  color: #fff;
`;
