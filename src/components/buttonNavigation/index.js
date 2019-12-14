import React from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function buttonNavigation() {
  return (
    <Container>
      <Link to="/Home">
        <button>Back</button>
      </Link>
      <Link to="/Page2">
        <button>Next</button>
      </Link>
    </Container>
  );
}
