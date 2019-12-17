/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Container, ButtonSelected } from "./styles";

import PropTypes from "prop-types";

export default function ButtonSelect({ buttons, type }) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(null);

  function handleToggleVisible(id, button) {
    dispatch({
      type: type,
      button
    });
    setActive(id);

    return id;

    //setActive(!active);
  }

  return (
    <>
      <Container>
        {buttons.button.map(button => (
          <ButtonSelected
            onClick={() => handleToggleVisible(button.id, button)}
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
  buttons: PropTypes.object.isRequired
};
