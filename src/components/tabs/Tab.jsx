import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const ListItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  :hover {
  }

  ${props =>
    props.isActive &&
    css`
      background-color: white;
      border: solid #ccc;
      border-width: 1px 1px 0 1px;
    `};
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
