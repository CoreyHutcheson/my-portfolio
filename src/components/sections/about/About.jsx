import React from "react";
import styled from "styled-components";

import Tabs from "src/components/tabs";
import SkillsContent from "./SkillsContent";

const Container = styled.div`
  width: 80%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const About = () => {
  return (
    <Container>
      <div>Picture of Me</div>
      <Tabs>
        <div label="About">My name is Corey.</div>

        <div label="Skills">
          <SkillsContent />
        </div>

        <div label="Hobbies">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </Container>
  );
};

export default About;
