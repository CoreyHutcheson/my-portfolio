import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const HobbiesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
`;

const IconContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.svg`
  fill: ${props => props.theme.font_onDark};
  width: 50px;
`;

const Hobbies = () => {
  const hobbies = useStaticQuery(graphql`
    query Hobbies {
      allHobbiesJson {
        edges {
          node {
            id
            name
            path
          }
        }
      }
    }
  `).allHobbiesJson.edges;

  return (
    <HobbiesContainer>
      {hobbies.map(({ node }) => (
        <IconContainer key={node.id}>
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0, 0, 400,400"
          >
            <g>
              <path d={node.path} />
            </g>
          </Icon>
          <div>{node.name}</div>
        </IconContainer>
      ))}
    </HobbiesContainer>
  );
};

export default Hobbies;
