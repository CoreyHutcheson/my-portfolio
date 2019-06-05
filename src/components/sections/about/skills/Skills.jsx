import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWordpress,
  faReact,
  faSass,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { sortObjects, getTitle } from "src/utils/js/helperFunctions";

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
`;

const IconContainer = styled.div`
  padding: 0.5rem;
`;

const Skills = () => {
  let skills = [faWordpress, faReact, faSass, faPhp, faCode];
  skills = sortObjects(skills, "iconName");

  return (
    <SkillsContainer>
      {skills.map(skill => {
        let title = getTitle(skill.iconName);
        title = title[0].toUpperCase() + title.substring(1);

        return (
          <IconContainer key={title}>
            <FontAwesomeIcon icon={skill} size="2x" />
            <div>{title}</div>
          </IconContainer>
        );
      })}
    </SkillsContainer>
  );
};

export default Skills;
