import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import { useProjects } from "src/utils/js/useProjects";
import Panel from "./panel";

const StyledProjects = styled.div`
  width: 100%;
  margin: 0 auto;
  background: inherit;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  justify-items: center;
  justify-content: center;
  align-items: center;

  @media (min-width: 400px) {
    width: 90%;
    max-width: 900px;
  }
`;

const modalStyles = {
  overlay: {},
  content: {
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    width: "90%",
    maxWidth: "900px",
    margin: "5% auto",
  },
};

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
        style={modalStyles}
      >
        <p>Title: {modalInfo.title}</p>
        <p>Alt: {modalInfo.alt}</p>
        <button onClick={handleModalClose}>Close</button>
      </Modal>
    </StyledProjects>
  );
};

export default Projects;
