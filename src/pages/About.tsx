import { Container } from "@material-ui/core";
import {
  GitHub,
  Facebook,
  YouTube,
  Instagram,
} from "@material-ui/icons";
import React from 'react';

const About = () => {
  return (
    <>
      <Container>
        <p style={{ fontSize: "1.3rem" }}>
          <b>My Todo App</b> is a project by Dhiraj using React, MUI.
          This app focuses on the ease of use of a Todo App. Write your todos,
          change some settings, Enjoy!
        </p>
        <h2>Contact</h2>
        <a
          href="https://github.com/Dhiraj-Pote"
          style={{
            color: "#24292E",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub fontSize="large" />
        </a>
        <a
          href="https://www.facebook.com/dhiraj.pote.589"
          style={{
            color: "#0D8BF0",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </a>
        <a
          href="https://www.youtube.com/kcclips"
          style={{
            color: "#FD0000",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTube fontSize="large" />
        </a>
        <a
          href="https://www.instagram.com/ys_dhiraj/"
          style={{
            color: "#CD2E96",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" />
        </a>
      </Container>
    </>
  );
};

export default About;
