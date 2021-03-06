
import styled from 'styled-components';

export const Master = styled.div`
  background-color: #FFF;
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 50px;
`;

export const Container = styled.div`
  background-color: #FFF;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
    width: 381px;
    height: 495px;
    padding: 47px 40px;

  h1 {
    font-size: 40px;
    font-family: "Montserrat-Light";
    font-weight: normal;
    color: #0C261C;
  }

  h2 {
    font-size: 20px;
    font-family: "Montserrat-Light";
    font-weight: normal;
    padding-top: 5px;
    color: #6E6E6E;
    line-height: 130%;
  }

  > img {
    width: 204px;
    height: 238px;
    padding-top: 36px;
  }
}

  button {
    display: flex;
    width: 138px;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    color: #15573f;
    border: solid 1px #15573f;
    border-radius: 25px; 
    margin-top: 32px;
    margin-left: 160px;

    :hover {
      background-color: #15573f;
      color: #FFF;
    }
  }
`;

export const DivPlant = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 377px;

  > h1 {
    font-size: 50px;
    font-family: "Montserrat-Light";
    font-weight: normal;
    color: #0C261C;
  }

  > h2 {
    font-size: 24px;
    font-family: "Montserrat-Light";
    font-weight: Normal;
    color: #D6D6D6;
  }

  > img {
    width: 206px;
    height: 200px;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 18px;

    > img {
      height: 28px;
      width: 28px;
    }

    > span {
      padding-left: 15px;
    }
  }

`;