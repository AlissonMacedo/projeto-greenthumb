import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export const Container = styled.div`
  background-color: #f6f6f6;
  display: flex;
  max-width: 800px;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 20px;
`;

export const ButtonSelected = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 215px;
  height: 190px;
  border: 0px;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
  background-color: ${props => (props.active ? "#FD9872" : "#FFF")};
  box-shadow: ${props => (props.active ? "5px 0px 30px #FD9872" : "none")};

  :hover {
    box-shadow: ${props =>
      props.active
        ? "5px 0px 30px #FD9872"
        : "5px 0px 20px rgba(0, 0, 0, 0.1)"};
  }

  img {
    height: 56px;
    width: 56px;
  }

  h3 {
    padding-top: 22px;
    font-family: "Montserrat-Light";
    font-weight: normal;
    color: #6e6e6e;
    align-items: center;
    font-size: 16px;
  }
`;
