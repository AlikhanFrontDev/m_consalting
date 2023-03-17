import React from "react";
import styled from "styled-components";
import usa from "../assets/usa.jpg";
import korea from "../assets/korea.jpg";
import germany from "../assets/germany.jpg";
import poland from "../assets/poland.jpg";
import uk from "../assets/uk.jpg";
import canada from "../assets/canada.webp";

import { Link } from "react-router-dom";

export default function WorkCountries() {
  return (
    <Container>
      <div className="logo">
        <h3>Demo Logo</h3>
      </div>
      <div className="boxes">
        <Link
          className="box"
          to={"/works"}
          style={{ backgroundImage: `url("${usa}")` }}
        >
          <h3>Amerika</h3>
        </Link>
        <div className="box" style={{ backgroundImage: `url("${korea}")` }}>
          <h3>Korea</h3>
        </div>
        <div className="box" style={{ backgroundImage: `url("${germany}")` }}>
          <h3>Germaniya</h3>
        </div>
        <div className="box" style={{ backgroundImage: `url("${poland}")` }}>
          <h3>Polsha</h3>
        </div>
        <div className="box" style={{ backgroundImage: `url("${canada}")` }}>
          <h3>Kanada</h3>
        </div>
        <div className="box" style={{ backgroundImage: `url("${uk}")` }}>
          <h3>Anglya</h3>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @media screen and (max-width: 480px) {
    background-color: var(--tg-theme-bg-color);
    color: var(--tg-theme-text-color);
    .box {
      min-width: 150px;
      min-height: 150px;
      background-color: red;
      margin: 2px;
      border-radius: 10px;
      background-size: cover;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      text-decoration: none;
    }
    .boxes {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 90%;
      row-gap: 10px;
      margin: 30px auto;
    }
    .logo {
      margin: 20px;
    }
  }
`;
