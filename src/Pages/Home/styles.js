import styled from "styled-components";
import { darken } from "polished";

export const Master = styled.div`
  background-color: #f6f6f6;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-left: 50px;
    z-index: 1;

    > div {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;

      padding-top: 30px;
      height: 100%;

      > h3 {
        margin-top: 66px;
        padding-top: 22px;
        margin-right: -100px;
        font-family: "Montserrat-Light";
        font-weight: normal;
        color: #000;
        align-items: center;
        font-size: 66px;
        width: 433px;
        height: 237px;
      }
    }
  }
`;

export const divImage = styled.div`
  display: flex;
  z-index: 0;

  > img {
    width: 300px;
  }
`;

export const ButtonStart = styled.button`
  margin-top: 31px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: 170px;
  border-radius: 25px;
  background-color: #15573f;
  color: #fff;
  padding-left: 21px;

  > a {
    color: #fff;
    font-family: "Montserrat-Light";
    font-weight: bold;
    font-size: 16px;
    padding-left: 13px;
  }
`;
