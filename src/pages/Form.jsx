import React from "react";
import styled from "styled-components";

export default function Form() {
  return (
    <Container>
      <h3 className="title">Ariza qoldiring</h3>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button className="button" type="reset">Yuborish</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  @media screen and (max-width: 480px) {
    form {
      display: flex;
      flex-direction: column;
    }
    input {
      padding: 10px;
      margin: 10px;
      border: none;
      background-color: var(--tg-theme-secondary-bg-color);
      border-radius: 10px;
      color: var(--tg-theme-text-color);
      border-color: var(--tg-theme-hint-color);
    }
    .title{
        margin: 15px;
    }
    .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 5px auto;
    width: 100px;
    height: 40px;
    background-color: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    text-decoration: none;
    font-size: 12px;
    text-align: center;
    border: none;
  }
  }
`;
