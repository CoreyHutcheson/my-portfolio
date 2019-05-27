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

const StyledContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
`;

const getTitle = iconName => {
  const replacements = {
    code: "jsx",
  };

  return replacements.hasOwnProperty(iconName)
    ? replacements[iconName]
    : iconName;
};

const sortObjects = (obj, sortBy) => {
  return obj.sort((a, b) => {
    let propA = a[sortBy].toUpperCase();
    let propB = b[sortBy].toUpperCase();

    return propA < propB ? -1 : propA > propB ? 1 : 0;
  });
};

const SkillContent = () => {
  let skills = [faWordpress, faReact, faSass, faPhp, faCode];
  skills = sortObjects(skills, "iconName");

  return (
    <StyledContent>
      {skills.map(skill => {
        let title = getTitle(skill.iconName);
        title = title[0].toUpperCase() + title.substring(1);

        return (
          <div>
            <FontAwesomeIcon icon={skill} size="2x" />
            <div>{title}</div>
          </div>
        );
      })}
    </StyledContent>
  );
};

export default SkillContent;
