import styled from "styled-components";
import { darken } from "polished";

export const Master = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 50px;
`;

export const Container = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductList = styled.ul`
  background-color: #f6f6f6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    height: 342px;
    width: 268px;
    background: #fff;
    border-radius: 6px;
    padding: 20px;

    :hover {
      box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.1);
    }

    > img {
      align-self: center;
      width: 114px;
      height: 168px;
    }

    > div {
      background-color: #fff;
      height: 73px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 10px;
    }
  }

  button {
    width: 213px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: solid 1px #15573f;
    color: #15573f;
    margin-left: 15px;
    margin-right: 15px;
    background-color: #fff;
    :hover {
      background-color: #15573f;
      color: #fff;
    }

    a {
      font-size: 15px;
    }
  }
`;

export const DivImage = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 45px;
  width: 50px;

  > img {
    height: 23px;
    width: 23px;
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #15573f;
    margin-top: 5px;
  }
  > span {
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0 5px;
    color: #6e6e6e;
    font-family: "Montserrat-Light";
    font-weight: Normal;
  }
`;
