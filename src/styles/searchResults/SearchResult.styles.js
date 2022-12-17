import styled from "styled-components";

export const ResultContainer = styled.div`
  padding: 0 77px 48px 77px;

  @media (max-width: 600px) {
    padding: 33px 28px 0 28px;
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  gap: 13px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
