import React from "react";

import PropTypes from "prop-types";

import { Container } from "./styles";

export default function Header({ image, text }) {
  return (
    <>
      <Container>
        <img src={image} alt="ImageHader" />
        <div>
          <h3>{text}</h3>
        </div>
      </Container>
    </>
  );
}

Header.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
