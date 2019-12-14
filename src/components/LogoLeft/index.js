import React from "react";

import { Container } from "./styles";

import logo from "../../assets/logo/logo.png";

export default function LogoLeft() {
  return (
    <>
      <Container>
        <img src={logo} alt="logo" />
        <div />
      </Container>
    </>
  );
}
