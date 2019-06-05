import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWordpress,
  faReact,
  faSass,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

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
  const sortObjects = (obj, sortBy) => {
    return obj.sort((a, b) => {
      let propA = a[sortBy].toUpperCase();
      let propB = b[sortBy].toUpperCase();

      return propA < propB ? -1 : propA > propB ? 1 : 0;
    });
  };

  const getTitle = iconName => {
    const replacements = {
      code: "jsx",
    };

    return replacements.hasOwnProperty(iconName)
      ? replacements[iconName]
      : iconName;
  };

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
