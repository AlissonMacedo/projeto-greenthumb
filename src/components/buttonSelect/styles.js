import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export const Container = styled.div`
  background-color: #f6f6f6;
  display: flex;
  width: 800px;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const ButtonSelected = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 215px;
  height: 190px;
  border: 0px;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: ${props => (props.active ? "#FD9872" : "#FFF")};
  box-shadow: ${props => (props.active ? "5px 0px 10px #FD9872" : "none")};

  h3 {
    font-family: "Montserrat-Light";
    color: #6e6e6e;
    align-items: center;
    font-size: 16px;
  }

  button:hover {
    border: solid 1px #999;
  }
`;
