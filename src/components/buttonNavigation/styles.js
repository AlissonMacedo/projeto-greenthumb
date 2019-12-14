import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
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

    a {
      font-size: 15px;
      color: #15573f;
    }
  }
`;
