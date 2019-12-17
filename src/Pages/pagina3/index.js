import React, { useState } from "react";

import { connect } from "react-redux";

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

function Pagina3({ questions }) {
  const [buttons, setButtons] = useState({
    button: [
      {
        id: 1,
        text: "Yes",
        pet: "true",
        image: Pet,
        imageActive: PetActive
      },
      {
        id: 2,
        text: "No/They don't care",
        pet: "false",
        image: NoAnswer,
        imageActive: NoAnswerActive
      }
    ]
  });

  console.log(questions);

  return (
    <>
      <Master>
        <LogoLeft />
        <Container>
          <Header image={dog} text="Do you have pets? Do they chew plants?" />
          <ButtonSelect type="QUESTION_PET" buttons={buttons} />
          <ButtonNavigation pageBack="/pagina2" pageNext="/paginalist" />
        </Container>
      </Master>
    </>
  );
}

export default connect(state => ({
  questions: state.questions
}))(Pagina3);
