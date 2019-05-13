import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SliderButtonContainer = styled.div`
  ${props => props.theme.flexCenterMixin}
  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme.color_primaryLight};

  @media (min-width: 600px) {
    padding: 0;
    border-bottom: none;
  }
`;

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 0 10px;
`;

const Slider = styled.span`
  background: ${props => props.theme.color_primaryLight};
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    background: ${props => props.theme.color_accent};
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + ${Slider} {
    /* background: ${props => props.theme.color_background}; */
  }

  :focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }

  :checked + ${Slider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Text = styled.span`
  color: ${props => props.theme.font_onPrimary1};
`;

const SliderButton = ({
  handleChange,
  preText = "Off",
  postText = "On",
  className,
}) => (
  <SliderButtonContainer className={className}>
    <Text>{preText}</Text>
    <Container>
      <Checkbox type="checkbox" onChange={e => handleChange(e)} />
      <Slider />
    </Container>
    <Text>{postText}</Text>
  </SliderButtonContainer>
);

SliderButton.propTypes = {
  handleChange: PropTypes.func.isRequired,
  preText: PropTypes.node,
  postText: PropTypes.node,
  className: PropTypes.string,
};

export default SliderButton;