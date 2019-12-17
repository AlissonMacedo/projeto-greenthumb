import React, { useState } from "react";

import { connect } from "react-redux";

import { Master, Container } from "./styles";

import ButtonNavigation from "../../components/buttonNavigation";
import Header from "../../components/Header";
import ButtonSelect from "../../components/buttonSelect";
import LogoLeft from "../../components/LogoLeft";

import wateringcan from "../../assets/illustrations/wateringcan.png";

import OneDrop from "../../assets/icons/green/one-drop.svg";
import TwoDrops from "../../assets/icons/green/two-drops.svg";
import ThreeDrops from "../../assets/icons/green/three-drops.svg";

import OneDropActive from "../../assets/icons/white/one-drop.svg";
import TwoDropsActive from "../../assets/icons/white/two-drops.svg";
import ThreeDropsActive from "../../assets/icons/white/three-drops.svg";

function Pagina2({ questions }) {
  const [buttons, setButtons] = useState({
    button: [
      {
        id: 1,
        text: "Daily",
        water: "High",
        image: ThreeDrops,
        imageActive: OneDropActive
      },
      {
        id: 2,
        text: "Regulary",
        water: "Low",
        image: TwoDrops,
        imageActive: TwoDropsActive
      },
      {
        id: 3,
        text: "Rarely",
        water: "None",
        image: OneDrop,
        imageActive: ThreeDropsActive
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
            image={wateringcan}
            text="How often do you want to water your plant?"
          />
          <ButtonSelect type="QUESTION_WATER" buttons={buttons} />
          <ButtonNavigation pageBack="/pagina1" pageNext="/pagina3" />
        </Container>
      </Master>
    </>
  );
}

export default connect(state => ({
  questions: state.questions
}))(Pagina2);
