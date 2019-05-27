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
  border-bottom: 1px solid #ccc;
  padding-left: 0;
`;

const Content = styled.div`
  width: 50%;
  min-height: 100px;
  text-align: center;
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
