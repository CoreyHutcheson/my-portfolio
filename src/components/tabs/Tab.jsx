import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const ListItem = styled.li`
  background: ${props => props.theme.color_primaryDark};
  display: inline-block;
  list-style: none;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border: solid ${props => props.theme.font_onPrimary1};
  border-width: 1px 1px 0 0;
  border-radius: 5px 5px 0 0;

  :first-of-type {
    border-left-width: 1px;
  }

  /* Shows active tab by making border-bottom transparent */
  ${props =>
    props.isActive &&
    css`
      border-bottom: 1px solid transparent;
      position: relative;
    `}
`;

const Tab = ({ activeTab, label, onClick }) => {
  return (
    <ListItem
      isActive={activeTab === label ? true : false}
      onClick={() => onClick(label)}
    >
      {label}
    </ListItem>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
