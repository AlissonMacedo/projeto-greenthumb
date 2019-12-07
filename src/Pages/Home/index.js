import React from "react";

import { MdArrowForward } from "react-icons/md";

import { Link } from "react-router-dom";

import ImagemCentral from "../../assets/illustration-home.png";
import ImageTextoLogo from "../../assets/logo-greenthumb.svg";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <div>
        <img src={ImageTextoLogo} />
        <h3>Find your next green friend</h3>
        <Link to="/pagina1">
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 170,
              borderRadius: 25,
              backgroundColor: "#15573F",
              color: "#FFF"
            }}
          >
            <MdArrowForward color="#FFF" size={30} />
            Pagina 1
          </button>
        </Link>
      </div>
      <div>
        <img src={ImagemCentral} style={{ height: 738, width: 779 }} />
      </div>
    </Container>
  );
}
