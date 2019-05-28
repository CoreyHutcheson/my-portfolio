import React from "react";
import styled from "styled-components";

import Tabs from "src/components/tabs";
import SkillsContent from "./SkillsContent";

import portrait from "src/assets/images/corey1.jpg";

const AboutContainer = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.font_onPrimary1};

  & > div {
    flex: 1;
    text-align: center;
  }

  @media (min-width: 600px) {
    max-width: 900px;
    flex-direction: row;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Blurb = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: block;
    max-width: 200px;
    margin: 0 auto;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <div>
        <ImageContainer>
          <Image src={portrait} alt="Corey Portrait" />
        </ImageContainer>

        <Blurb>
          This is a blurb! This is a blurb! This is a blurb! This is a blurb!
          This is a blurb!
        </Blurb>
      </div>

      <div>
        <Tabs>
          <div label="About">My name is Corey Hutcheson.</div>

          <div label="Skills">
            <SkillsContent />
          </div>

          <div label="Hobbies">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
        </Tabs>
      </div>
    </AboutContainer>
  );
};

export default About;
