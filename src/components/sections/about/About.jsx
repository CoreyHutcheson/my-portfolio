import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Tabs from "src/components/tabs";
import IconList from "./icon-list";

const AboutContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.font_onDark};

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

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Blurb = styled.div`
  color: ${props => props.theme.font_onPrimary1};
  display: none;

  @media (min-width: 600px) {
    display: block;
    max-width: 200px;
    margin: 0 auto;
  }
`;

const About = () => {
  const aboutData = useStaticQuery(graphql`
    query AboutData {
      dataJson {
        about_text
        blurb
        profile_pic {
          alt_text
          src {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
        hobbies {
          name
          viewbox
          path
        }
        skills {
          name
          prefix
          icon
        }
      }
    }
  `).dataJson;

  return (
    <AboutContainer>
      <div>
        <ImageContainer>
          <Image
            fluid={aboutData.profile_pic.src.childImageSharp.fluid}
            alt={aboutData.profile_pic.alt_text}
          />
        </ImageContainer>

        <Blurb>{aboutData.blurb}</Blurb>
      </div>

      <div>
        <Tabs>
          <div label="About">{aboutData.about_text}</div>

          <div label="Skills">
            <IconList list={aboutData.skills} />
          </div>

          <div label="Hobbies">
            <IconList list={aboutData.hobbies} />
          </div>
        </Tabs>
      </div>
    </AboutContainer>
  );
};

export default About;
