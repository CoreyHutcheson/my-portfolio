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
  const [modalInfo, setModalInfo] = useState({});

  const handleModalOpen = info => {
    setModalInfo(info);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setModalInfo({});
    setShowModal(false);
  };

  // This is used for accessibility purposes
  Modal.setAppElement("#___gatsby");

  return (
    <StyledProjects>
      {projectData.map(({ node }) => (
        <Panel
          key={node.id}
          src={node.img.src.childImageSharp.fluid}
          alt={node.img.alt_text}
          title={node.title}
          openModal={handleModalOpen}
        />
      ))}

      <Modal
        isOpen={showModal}
        contentLabel="Project Modal"
        onRequestClose={handleModalClose}
      >
        <p>Title: {modalInfo.title}</p>
        <p>Alt: {modalInfo.alt}</p>
        <button onClick={handleModalClose}>Close</button>
      </Modal>
    </StyledProjects>
  );
};

export default Projects;
