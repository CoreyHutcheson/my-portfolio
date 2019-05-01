import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import VisitSiteLink from "./VisitSiteLink";

const StyledModalContent = styled.div`
  font-family: "Raleway", sans-serif;
  padding: 20px;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const Tag = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 1rem;
`;

const Description = styled.p``;

const CloseButton = styled.div`
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  margin-left: auto;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;

const ModalContent = ({
  title,
  tag,
  description,
  link = "",
  handleModalClose,
}) => {
  return (
    <StyledModalContent>
      <div>
        <Title>{title}</Title>
        <Tag>{tag}</Tag>
        <Description>{description}</Description>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {link ? <VisitSiteLink link={link} /> : null}
        <CloseButton onClick={handleModalClose}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </CloseButton>
      </div>
    </StyledModalContent>
  );
};

ModalContent.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  handleModalClose: PropTypes.func.isRequired,
};

export default ModalContent;
