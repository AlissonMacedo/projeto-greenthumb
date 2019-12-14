import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function buttonNavigation({ pageBack, pageNext }) {
  return (
    <Container>
      <Link to={pageBack}>
        <button>
          <a>Back</a>
        </button>
      </Link>
      <Link to={pageNext}>
        <button>
          <a>Next</a>
        </button>
      </Link>
    </Container>
  );
}

buttonNavigation.propTypes = {
  pageBack: PropTypes.string.isRequired
};
