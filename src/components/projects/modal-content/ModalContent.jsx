import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lighten, darken } from "polished";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import VisitSiteLink from "./VisitSiteLink";
import GithubLink from "./GithubLink";

const StyledModalContent = styled.div`
  background: ${props => props.theme.background_Primary};
  color: ${props => props.theme.font_Primary};
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const Tag = styled.div`
  color: ${props =>
    props.theme.name === "light"
      ? lighten(0.3, props.theme.font_Primary)
      : darken(0.3, props.theme.font_Primary)};
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  line-height: 1.3;
`;

const StyledTech = styled.div`
  margin-bottom: 1rem;

  & > span {
    font-weight: bold;
  }
`;

const CloseButton = styled.div`
  cursor: pointer;
  margin-left: auto;

  &:hover {
    color: ${props =>
      props.theme.name === "light"
        ? lighten(0.3, props.theme.font_Primary)
        : darken(0.3, props.theme.font_Primary)};
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ModalContent = ({
  title,
  tag,
  description,
  technologies,
  link = "",
  github = "",
  handleModalClose,
}) => {
  return (
    <StyledModalContent>
      <InfoContainer>
        <div>
          <Title>{title}</Title>
          <Tag>{tag}</Tag>
          <Description>{description}</Description>
        </div>

        <StyledTech>
          <span>Uses:</span> {technologies}
        </StyledTech>
      </InfoContainer>

      <ButtonContainer>
        {link ? <VisitSiteLink link={link} /> : null}

        {github ? <GithubLink url={github} /> : null}

        <CloseButton onClick={handleModalClose}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </CloseButton>
      </ButtonContainer>
    </StyledModalContent>
  );
};

ModalContent.propTypes = {
  title: PropTypes.string,
  tag: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  handleModalClose: PropTypes.func.isRequired,
};

export default ModalContent;
