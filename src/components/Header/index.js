import React from "react";

import { Container } from "./styles";

import Sun from "../../assets/illustrations/sun.png";

export default function Header() {
  return (
    <>
      <Container>
        <img src={Sun} alt="sun" />
        <div>
          <h3>First, set the amount of sunlight your plant will get</h3>
        </div>
      </Container>
    </>
  );
}
