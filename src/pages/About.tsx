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
          <b>This is Raina's Personal Todo App</b> gifted by Shristi with love.
          So, dear Raina Write your todos, complete the tasks,
          change some settings, Enjoy!
        </p>

      </Container>
    </>
  );
};

export default About;
