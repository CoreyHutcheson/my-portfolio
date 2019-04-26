import React from "react";
import styled from "styled-components";

import { useProjects } from "src/utils/js/useProjects";
import Panel from "./panel";

const StyledProjects = styled.div`
  width: 90%;
  height: 1000px;
  background: pink;
`;

const Projects = () => {
  const projectData = useProjects();

  return (
    <StyledProjects>
      {projectData.map(({ node }) => (
        <Panel
          src={node.img.src.childImageSharp.fluid}
          alt={node.img.alt_text}
          title={node.title}
        />
      ))}
    </StyledProjects>
  );
};

export default Projects;
