import React, { useState } from "react";

import { Link } from "react-router-dom";

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

export default function Pagina2() {
  const [buttons, setButtons] = useState({
    button: [
      {
        id: 1,
        text: "Rarely",
        value: "High",
        image: OneDrop,
        imageActive: OneDropActive
      },
      {
        id: 2,
        text: "Regulary",
        value: "Low",
        image: TwoDrops,
        imageActive: TwoDropsActive
      },
      {
        id: 3,
        text: "Daily",
        value: "None",
        image: ThreeDrops,
        imageActive: ThreeDropsActive
      }
    ]
  });

  return (
    <>
      <Master>
        <LogoLeft />
        <Container>
          <Header
            image={wateringcan}
            text="How often do you want to water your plant?"
          />
          <ButtonSelect buttons={buttons} />
          <ButtonNavigation pageBack="/pagina1" pageNext="/pagina3" />
        </Container>
      </Master>
    </>
  );
}
