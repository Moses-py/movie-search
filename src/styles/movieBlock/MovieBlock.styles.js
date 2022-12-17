import styled from "styled-components";

export const BlockContainer = styled.div`
  padding: 0 77px 48px 77px;

  @media (max-width: 600px) {
    padding: 33px 28px 48 28px;
  }
`;

export const BlockName = styled.h3`
  font-size: 24px;
`;

export const BlockCardWrapper = styled.div`
  display: flex;
  gap: 13px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BlockCard = styled.div`
  min-width: 300px;
  min-height: 300px;
  border-radius: 12px;
  background-image: url(${(props) => props.poster});
  background-size: cover;
  background-repeat: no-repeat;
  // background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
`;
export const OverlayBlock = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
  position: absolute;
  border-radius: 12px;
  top: 0;
  left: 0;
`;

export const CardName = styled.p`
  font-size: 24px;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 2;
`;
