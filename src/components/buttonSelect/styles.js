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

  ${props =>
    props.active
      ? css`
          -webkit-box-shadow: 0px 25px 33px -23px rgba(253, 152, 114, 1);
          -moz-box-shadow: 0px 25px 33px -23px rgba(253, 152, 114, 1);
          box-shadow: 0px 25px 33px -23px rgba(253, 152, 114, 1);
        `
      : null};
  background-color: ${props => (props.active ? "#FD9872" : "#FFF")};

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
