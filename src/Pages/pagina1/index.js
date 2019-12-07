import React from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function pagina1() {
  return (
    <>
      <Container>
        <div>
          <p>Pagina 1</p>
          <Link to="/Home">
            <button>Voltar</button>
          </Link>
        </div>
      </Container>
    </>
  );
}
