import styled from "styled-components";

export const AppbarWrapper = styled.div`
  padding: 40px 77px;
  background: #292929;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;

  @media (max-width: 880px) {
    justify-content: center;
  }
`;

export const LogoContainer = styled.div`
  padding: 14px;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  box-sizing: border-box;
`;
