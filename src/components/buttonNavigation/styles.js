import styled from "styled-components";

export const Container = styled.div`
  background-color: #f6f6f6;
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;

  button {
    width: 100px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: solid 1px #15573f;
    color: #15573f;
    margin-left: 15px;
    margin-right: 15px;
    background-color: #f6f6f6;
    :hover {
      background-color: #15573f;
      color: #fff;
    }

    a {
      font-size: 15px;
    }
  }
`;
