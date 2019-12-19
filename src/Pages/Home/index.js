import React from "react";

import { MdArrowForward } from "react-icons/md";

import { Link } from "react-router-dom";

import ImagemCentral from "../../assets/illustration-home.png";
import ImageTextoLogo from "../../assets/logo-greenthumb.svg";

import { Master, Container, divImage, ButtonStart } from "./styles";

export default function Home() {
  return (
    <Master>
      <Container>
        <div>
          <div>
            <img src={ImageTextoLogo} style={{ width: 208, height: 24 }} />
            <h3>Find your next green friend</h3>
            <Link to="/pagina1">
              <ButtonStart>
                <MdArrowForward
                  color="#FFF"
                  size={30}
                  styled={{ paddingRight: 20 }}
                />
                <a>start quizz</a>
              </ButtonStart>
            </Link>
          </div>
        </div>
        <divImage>
          <img src={ImagemCentral} style={{ width: "100%", maxWidth: 660 }} />
        </divImage>
      </Container>
    </Master>
  );
}
