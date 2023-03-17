import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import img from "../assets/a.jpg";
import imgb from "../assets/b.jpg";

export default function MainPage() {
  return (
    <Container>
      <div className="logo">Demo Logo</div>
      <div className="boxes">
        <Link to={"wcon"}>
          <div
            className="box"
            style={{ backgroundImage: `url("${img}")`, marginTop: "40px" }}
          >
            <h3 className="title">Biz bilan chetelda yuqori maoshda ishlang</h3>
          </div>
        </Link>
        <div
          className="box"
          style={{ backgroundImage: `url("${imgb}")`, marginTop: "40px" }}
        >
          <h3 className="title">Chetel oliygohlarida biz bilan talab bo'ling</h3>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@1,500&display=swap");
  @media screen and (max-width: 480px) {
    background-color: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
    .logo {
      margin: 20px;
    }

    .box {
      width: 80%;
      height: 350px;
      /* background-color: red; */
      margin: 20px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      /* background-image: url(img) */
      background-size: cover;
      border-radius: 20px;
      /* color: var(--tg-theme-text-color); */
      font-size: large;
      font-family: sans-serif;
      padding: 20px;
    }
    a{
        text-decoration: none;
    }
    .title{
      color: #fff;
    }
  }
`;
