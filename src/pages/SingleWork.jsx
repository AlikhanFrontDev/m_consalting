import React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

import image from "../assets/a.jpg";

export default function SingleWork() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Container>
      <div
        className="image"
        // style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <Link
        className="button"
        to={'/form'}
      >
        Ariza qoldirish
      </Link>
      <h3>Lorem, ipsum dolor.</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dicta. Nam quibusdam dignissimos dolorem blanditiis. Corporis inventore nesciunt possimus sint nam vel dolorem officiis illum quas vero non esse dicta debitis quod in animi molestiae deleniti et, quia facere sed asperiores. Repellendus, omnis molestias architecto tempore expedita sequi accusamus quibusdam.</p>
    </Container>
  );
}

const Container = styled.div`
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
  .colorAccardion {
    background-color: var(--tg-theme-bg-color);
  }
  .name {
    color: var(--tg-theme-text-color);
  }
  .info {
    color: var(--tg-theme-hint-color);
  }
  .description {
    color: var(--tg-theme-hint-color);
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
