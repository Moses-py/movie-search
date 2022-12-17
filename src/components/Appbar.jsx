import React from "react";
import {
  AppbarWrapper,
  Logo,
  LogoContainer,
} from "../styles/appbar/Appbar.styles.js";

export const Appbar = () => {
  return (
    <AppbarWrapper>
      <LogoContainer>
        <Logo src="\assets\MyTestApp.png" alt="app-logos" />
      </LogoContainer>
    </AppbarWrapper>
  );
};
