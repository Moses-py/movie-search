import styled from "styled-components";

export const SearchbarWrapper = styled.div`
  padding: 63px 77px 48px 77px;
  @media (max-width: 600px) {
    padding: 56px 28px 0 28px;
  }
`;

export const SearchText = styled.h3`
  font-size: 24px;
  margin: 0.5rem 0;
`;

export const SearchBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchBox = styled.input`
  width: 100%;
  border: 1px solid #000;
  padding: 1rem;
`;

export const Form = styled.form`
  width: 100%;
`;
