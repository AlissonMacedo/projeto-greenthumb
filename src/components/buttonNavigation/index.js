import React from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function buttonNavigation() {
  return (
    <Container>
      <Link to="/Home">
        <button>
          <a>Back</a>
        </button>
      </Link>
      <Link to="/Page2">
        <button>
          <a>Next</a>
        </button>
      </Link>
    </Container>
  );
}
