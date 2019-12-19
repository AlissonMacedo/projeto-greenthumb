import styled from "styled-components";
import PropTypes from "prop-types";

const height = window.innerHeight;

export const Container = styled.div`
  background-color: ${props => (props.white ? "#FFF" : "#f6f6f6")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 25px;
  height: ${props => (props.active ? "height" : "100%")};
  padding-top: 40px;
  padding-bottom: 30px;
  margin-left: 40px;

  img {
    width: 23px;
    height: 208px;
    margin-bottom: 30px;
  }

  div {
    width: 1px;
    height: 100% !important;
    border: solid 0.2px rgba(21, 87, 63, 0.3);
    margin: 10px;
    margin-bottom: 50px;
  }
`;
