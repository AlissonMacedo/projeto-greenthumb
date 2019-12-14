import React, { useState } from "react";

import { Container, ButtonSelected } from "./styles";

export default function ButtonSelect() {
  const [active, setActive] = useState(null);
  const [buttons, setButtons] = useState({
    buttons: [
      {
        id: 1,
        text: "High sunlight",
        value: "High"
      },
      {
        id: 2,
        text: "Low sunlight",
        value: "Low"
      },
      {
        id: 3,
        text: "No sunlight",
        value: "None"
      }
    ]
  });

  function handleToggleVisible() {
    setActive(!active);
  }

  return (
    <>
      <Container>
        <ButtonSelected onClick={handleToggleVisible} active={active}>
          <img />
          <h3>High sunlight</h3>
        </ButtonSelected>
        <ButtonSelected onClick={handleToggleVisible} active={active}>
          <img />
          <h3>Low sunlight</h3>
        </ButtonSelected>
        <ButtonSelected onClick={handleToggleVisible} active={active}>
          <img />
          <h3>No sunlight</h3>
        </ButtonSelected>
      </Container>
    </>
  );
}
