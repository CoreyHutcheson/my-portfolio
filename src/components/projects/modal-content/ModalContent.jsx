import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import VisitSiteLink from "./VisitSiteLink";
import GithubLink from "./GithubLink";

const StyledModalContent = styled.div`
  background: ${props =>
    props.theme.name === "light" ? "#fff" : props.theme.color_primary};
  color: ${props => props.theme.font_onPrimary1};
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
  color: ${props => props.theme.font_onPrimary2};
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  line-height: 1.3;
  padding-bottom: 1rem;
`;

const StyledTech = styled.div`
  border-top: 1px solid ${props => props.theme.font_onPrimary1};
  padding-top: 0.5rem;
  margin-bottom: 1rem;

  & > span {
    font-weight: bold;
  }
`;

const CloseButton = styled.div`
  background: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.87);
  padding: 20px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    color: rgba(0, 0, 0, 0.87);
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
  className,
}) => {
  return (
    <StyledModalContent className={className}>
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
      </ButtonContainer>

      <CloseButton onClick={handleModalClose}>
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </CloseButton>
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
  className: PropTypes.string,
};

export default ModalContent;
