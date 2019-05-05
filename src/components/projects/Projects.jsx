import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import { useProjects } from "src/utils/js/useProjects";
import Panel from "./panel";
import Carousel from "src/components/carousel";
import ModalContent from "./modal-content";

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
    padding: "0",
  },
};

const CarouselContainer = styled.div`
  height: 50%;

  @media (min-width: 600px) {
    height: 60%;
  }
`;

const ContentContainer = styled.div`
  height: 50%;

  @media (min-width: 600px) {
    height: 40%;
  }
`;

const Projects = () => {
  const projectData = useProjects();
  const [showModal, setShowModal] = useState(false);
  const [info, setInfo] = useState({});

  const handleModalOpen = info => {
    setInfo(info);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setInfo({});
    setShowModal(false);
  };

  // This is used for accessibility purposes
  Modal.setAppElement("#___gatsby");

  return (
    <StyledProjects>
      {projectData.map(({ node }) => (
        <Panel {...node} openModal={handleModalOpen} />
      ))}

      <Modal
        isOpen={showModal}
        contentLabel="Project Modal"
        onRequestClose={handleModalClose}
        style={modalStyles}
      >
        <CarouselContainer>
          <Carousel images={info.images} />
        </CarouselContainer>

        <ContentContainer>
          <ModalContent {...info} handleModalClose={handleModalClose} />
        </ContentContainer>
      </Modal>
    </StyledProjects>
  );
};

export default Projects;
