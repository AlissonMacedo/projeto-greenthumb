import React, { useState } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { Master, Container } from "./styles";

import ButtonNavigation from "../../components/buttonNavigation";
import Header from "../../components/Header";
import ButtonSelect from "../../components/buttonSelect";
import LogoLeft from "../../components/LogoLeft";

import Sun from "../../assets/illustrations/sun.png";

import SunHigh from "../../assets/icons/coral/high-sun.svg";
import SunLow from "../../assets/icons/coral/low-sun.svg";
import NoAnswer from "../../assets/icons/coral/no-answer.svg";

import SunHighActive from "../../assets/icons/white/high-sun.svg";
import SunLowActive from "../../assets/icons/white/low-sun.svg";
import NoAnswerActive from "../../assets/icons/white/no-answer.svg";

function Pagina1({ questions }) {
  const [buttons, setButtons] = useState({
    button: [
      {
        id: 1,
        text: "High sunlight",
        sun: "high",
        image: SunHigh,
        imageActive: SunHighActive
      },
      {
        id: 2,
        text: "Low sunlight",
        sun: "low",
        image: SunLow,
        imageActive: SunLowActive
      },
      {
        id: 3,
        text: "No sunlight",
        sun: "none",
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
          <Header
            image={Sun}
            text="First, set the amount of sunlight your plant will get"
          />
          <ButtonSelect type="QUESTION_SUN" buttons={buttons} />
          <ButtonNavigation pageBack="/Home" pageNext="/pagina2" />
        </Container>
      </Master>
    </>
  );
}

export default connect(state => ({
  questions: state.questions
}))(Pagina1);
