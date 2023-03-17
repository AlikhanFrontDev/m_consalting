import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import image from "../assets/a.jpg";

export default function SingleWork() {

  return (
    <Container>
      <div
        className="image"
      ></div>
      <Link
        className="button"
        to={'/form'}
      >
        Ariza qoldirish
      </Link>
      <h3>Lorem, ipsum dolor.</h3>
      <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dicta. Nam quibusdam dignissimos dolorem blanditiis. Corporis inventore nesciunt possimus sint nam vel dolorem officiis illum quas vero non esse dicta debitis quod in animi molestiae deleniti et, quia facere sed asperiores. Repellendus, omnis molestias architecto tempore expedita sequi accusamus quibusdam.</p>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
  .image {
    height: 45vh;
    width: 100vw;
    object-fit: cover;
    position: center;
    background-size: cover;
    border-bottom-right-radius: 40px;
    background-color: red;
    background-image: url(${image});
  }
  .text{
    padding: 5px;
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
  }
`;
