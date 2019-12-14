import React from "react";

import { Link } from "react-router-dom";

import { Master, Container } from "./styles";

import ButtonNavigation from "../../components/buttonNavigation";
import Header from "../../components/Header";
import ButtonSelect from "../../components/buttonSelect";
import LogoLeft from "../../components/LogoLeft";

export default function pagina1() {
  return (
    <>
      <Master>
        <LogoLeft />
        <Container>
          <Header />
          <ButtonSelect />
          <ButtonNavigation />
        </Container>
      </Master>
    </>
  );
}
