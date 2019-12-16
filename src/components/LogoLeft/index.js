import React from "react";

import { Container } from "./styles";

import PropTypes from "prop-types";

import logo from "../../assets/logo/logo.png";

export default function LogoLeft({active, white}) {
  return (
    <>
      <Container active={active} white={white}>
        <img src={logo} alt="logo" />
        <div />
      </Container>
    </>
  );
}

LogoLeft.propTypes = {
  active: PropTypes.bool,
  white: PropTypes.bool
};
