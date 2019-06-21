import React from "react";
import styled from "styled-components";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.font_onPrimary1};
`;

export const Icon = () => <StyledIcon icon={faChessKing} size="2x" />;
