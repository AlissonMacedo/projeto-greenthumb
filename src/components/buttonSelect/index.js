import React, { useState } from "react";

import { Container, ButtonSelected } from "./styles";

export default function ButtonSelect() {
  const [active, setActive] = useState(null);
  const [buttons, setButtons] = useState({
    button: [
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

  function handleToggleVisible(id) {
    setActive(id);
    console.log(active);

    //setActive(!active);
  }

  return (
    <>
      <Container>
        {buttons.button.map(button => (
          <ButtonSelected
            onClick={() => handleToggleVisible(button.id)}
            active={button.id === active}
          >
            <img />
            <h3>{button.text}t</h3>
          </ButtonSelected>
        ))}
      </Container>
    </>
  );
}
