import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../assets/a.jpg"

export default function Works() {
  return (
    <Container>
      <Link to={'/single'} className="university">
        <div
          className="image"
        //   style={{ backgroundImage: url={image}}}
        ></div>
        <div className="name">Tokarlik</div>
        <div className="hint price">Maosh: $2000+</div>
        <div className="hint ielts">Til bilish: IELTS 5.5</div>
        <div className="hint ielts">Tajriba: 2+ yil</div>
        <div className="hint city">New York</div>
      </Link>
      <div className="university">
        <div
          className="image"
        //   style={{ backgroundImage: url={image}}}
        ></div>
        <div className="name">asd</div>
        <div className="hint price">asd</div>
        <div className="hint ielts">asd</div>
        <div className="hint ielts">asd</div>
        <div className="hint city">asd</div>
      </div>
      <div className="university">
        <div
          className="image"
        //   style={{ backgroundImage: url={image}}}
        ></div>
        <div className="name">asd</div>
        <div className="hint price">asd</div>
        <div className="hint ielts">asd</div>
        <div className="hint ielts">asd</div>
        <div className="hint city">asd</div>
      </div>
      <div className="university">
        <div
          className="image"
        //   style={{ backgroundImage: url={image}}}
        ></div>
        <div className="name">asd</div>
        <div className="hint price">asd</div>
        <div className="hint ielts">asd</div>
        <div className="hint ielts">asd</div>
        <div className="hint city">asd</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
    .university {

      width: 60px;
      margin-top: 10px;
      color: var(--tg-theme-text-color);
      text-decoration: none;
      background-color: var(--tg-theme-bg-color);
      /* background-color: red; */
      min-height: 250px;
      width: 170px;
      border-radius: 10px;
      font-family: "Open Sans", sans-serif;
      text-align: center;
      padding: 2px;
      border: 0.1px solid white;
    }
    .name {
      font-weight: 800;
      color: var(--tg-theme-text-color);
    }
    .image {
      width: 100%;
      height: 100px;
      border-radius: 10px;
      background-position: center;
      background-size: cover;
      background-image: url(${image});
    }
    .hint {
      color: var(--tg-theme-hint-color);
    }

    h1 {
      color: var(--tg-theme-text-color);
    }
    a {
      color: var(--tg-theme-text-color);
      text-decoration: none;
    }
`;
