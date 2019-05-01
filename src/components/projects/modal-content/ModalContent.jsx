import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "src/components/button";

const StyledModalContent = styled.div`
  font-family: "Raleway", sans-serif;
  padding: 20px;
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

const StyledLink = styled(Button)`
  color: #f5f5f5;
  background: #e31b6d;

  &:hover {
    background: #f5f5f5;
    color: #e31b6d;
  }

  & > span {
    margin-left: 10px;
  }
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

const ModalContent = ({
  title,
  tag,
  description,
  link = "",
  handleModalClose,
}) => {
  const linkElement = (
    <a
      style={{ textDecoration: "none" }}
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <StyledLink>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
        <span>Visit Site</span>
      </StyledLink>
    </a>
  );

  return (
    <StyledModalContent>
      <Title>{title}</Title>
      <Tag>{tag}</Tag>
      <Description>{description}</Description>

      {link ? linkElement : null}

      <CloseButton onClick={handleModalClose}>
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </CloseButton>
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
