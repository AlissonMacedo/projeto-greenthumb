import styled from "styled-components";

export const Container = styled.div`
  background-color: #f6f6f6;
  width: 800px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  image {
    height: 126px;
    width: 126px;
    padding: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
    justify-content: center;
    align-items: center;
    width: 470px;
    word-wrap: normal;
    margin: 15px;
    text-align: center;

    h3 {
      font-family: "Montserrat-Light";
      font-weight: normal;
      color: #6e6e6e;
      align-items: center;
      font-size: 30px;
    }
  }
`;
