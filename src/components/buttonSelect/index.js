import React, { useState } from "react";

import { Container, ButtonSelected } from "./styles";

import PropTypes from "prop-types";

import SunHigh from "../../assets/icons/coral/high-sun.svg";

export default function ButtonSelect({ buttons }) {
  const [active, setActive] = useState(null);

  function handleToggleVisible(id) {
    setActive(id);
    console.log(buttons);

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
            <img
              src={button.id === active ? button.imageActive : button.image}
            />
            <h3>{button.text}</h3>
          </ButtonSelected>
        ))}
      </Container>
    </>
  );
}

ButtonSelect.propTypes = {
  buttons: PropTypes.array.isRequired
};
