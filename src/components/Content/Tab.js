import React from 'react';
import PropTypes from "prop-types";

const Tab = props => {
  return (
    <div
      className={props.selectedTab === props.tab ? `tab active-tab` : 'tab'}
      onClick={() => props.selectTabHandler(props.tab)}
    > 
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string.isRequired
}

export default Tab;