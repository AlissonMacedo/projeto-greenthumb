import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
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
    border-color: #15573f;
    margin-left: 15px;
    margin-right: 15px;

    a {
      color: #15573f;
    }
  }
`;
