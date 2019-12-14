import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Master, Container } from "./styles";

import ButtonNavigation from "../../components/buttonNavigation";
import Header from "../../components/Header";
import ButtonSelect from "../../components/buttonSelect";
import LogoLeft from "../../components/LogoLeft";

import dog from "../../assets/illustrations/dog.png";

import Pet from "../../assets/icons/coral/pet.svg";
import NoAnswer from "../../assets/icons/coral/no-answer.svg";

import PetActive from "../../assets/icons/white/pet.svg";
import NoAnswerActive from "../../assets/icons/white/no-answer.svg";

export default function Pagina3() {
  const [buttons, setButtons] = useState({
    button: [
      {
        id: 1,
        text: "Yes",
        value: "yes",
        image: Pet,
        imageActive: PetActive
      },
      {
        id: 2,
        text: "No/They don't care",
        value: "no",
        image: NoAnswer,
        imageActive: NoAnswerActive
      }
    ]
  });

  return (
    <>
      <Master>
        <LogoLeft />
        <Container>
          <Header image={dog} text="Do you have pets? Do they chew plants?" />
          <ButtonSelect buttons={buttons} />
          <ButtonNavigation pageBack="/pagina2" pageNext="/paginalist" />
        </Container>
      </Master>
    </>
  );
}
