import React from "react";
import styled from "styled-components";

import Tabs from "src/components/tabs";
import SkillsContent from "./SkillsContent";

import portrait from "src/assets/images/corey1.jpg";

const Container = styled.div`
  width: 95%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.font_onPrimary1};
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const About = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={portrait} alt="Corey Portrait" />
      </ImageContainer>

      <Tabs>
        <div label="About">My name is Corey Hutcheson.</div>

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
