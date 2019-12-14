import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Master, Container } from "./styles";

import ButtonNavigation from "../../components/buttonNavigation";
import Header from "../../components/Header";
import ButtonSelect from "../../components/buttonSelect";
import LogoLeft from "../../components/LogoLeft";

import dog from "../../assets/illustrations/dog.png";

export default function PaginaList() {
  return (
    <>
      <Master>
        <LogoLeft />
        <Container>
          <Header image={dog} text="Do you have pets? Do they chew plants?" />

          <ButtonNavigation pageBack="/pagina2" pageNext="/paginalist" />
        </Container>
      </Master>
    </>
  );
}
