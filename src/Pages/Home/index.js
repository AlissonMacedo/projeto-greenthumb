import React from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <div>
        <h1>Home</h1>
        <Link to="/pagina1">
          <button>Pagina 1</button>
        </Link>
      </div>
    </Container>
  );
}
