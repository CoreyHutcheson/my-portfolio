import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCode);

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
`;

const IconContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  fill: ${props => props.theme.font_onDark};
  width: 50px;
`;

const IconName = styled.div``;

const IconList = ({ list }) => {
  return (
    <Container>
      {list.map(icon => {
        if (icon.path) {
          return (
            <IconContainer key={icon.name}>
              <Icon
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox={`0, 0, ${icon.viewbox}`}
              >
                <g>
                  <path d={icon.path} />
                </g>
              </Icon>

              <IconName>{icon.name}</IconName>
            </IconContainer>
          );
        } else {
          return (
            <IconContainer key={icon.name}>
              <Icon>
                <FontAwesomeIcon icon={[icon.prefix, icon.icon]} size="2x" />
              </Icon>

              <IconName>{icon.name}</IconName>
            </IconContainer>
          );
        }
      })}
    </Container>
  );
};

IconList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default IconList;
