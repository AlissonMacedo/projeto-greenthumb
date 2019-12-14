import styled from "styled-components";

export const Container = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25px;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 30px;
  margin-left: 40px;

  img {
    width: 23px;
    height: 208px;
  }

  div {
    width: 1px;
    height: 100%;
    border: solid 0.2px rgba(21, 87, 63, 0.3);
    margin: 10px;
  }
`;
