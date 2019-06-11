import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Tab from "./Tab";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const List = styled.ol`
  padding-left: 0;
  box-shadow: ${props => props.theme.boxShadow};
  user-select: none;
`;

const Content = styled.div`
  background: ${props => props.theme.color_primaryDark};
  border: 1px solid ${props => props.theme.font_onPrimary1};
  border-radius: ${props => props.theme.borderRadius};
  width: 100%;
  max-width: 400px;
  min-height: 200px;
  text-align: center;
  margin-top: -1px;
  padding: 1rem;
  box-shadow: ${props => props.theme.boxShadow};
  ${props => props.theme.flexCenterMixin};
  line-height: 1.4rem;
`;

const Tabs = ({ children, className }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <Container>
      <List>
        {children.map(child => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={tab => setActiveTab(tab)}
            />
          );
        })}
      </List>

      <Content className={className}>
        {children.map(child =>
          child.props.label === activeTab ? child.props.children : undefined
        )}
      </Content>
    </Container>
  );
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  className: PropTypes.string,
};

export default Tabs;
