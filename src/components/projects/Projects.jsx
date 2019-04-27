import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import { useProjects } from "src/utils/js/useProjects";
import Panel from "./panel";

const StyledProjects = styled.div`
  width: 90%;
  height: 1000px;
  background: pink;
`;

const Projects = () => {
  const projectData = useProjects();
  const [showModal, setShowModal] = useState(false);

  return (
    <StyledProjects>
      {projectData.map(({ node }) => (
        <Panel
          src={node.img.src.childImageSharp.fluid}
          alt={node.img.alt_text}
          title={node.title}
          openModal={() => setShowModal(true)}
        />
      ))}

      <Modal isOpen={showModal} contentLabel="Example Modal">
        <p>This is a modal</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </Modal>
    </StyledProjects>
  );
};

export default Projects;
