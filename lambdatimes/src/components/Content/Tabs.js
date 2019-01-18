import React from 'react';
import PropTypes from "prop-types";
import Tab from './Tab';

const Tabs = props => {
  console.log(props);
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          props.tabs.map((tab,key) => {
            return <Tab key={key} tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} />
          })
        }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Tabs;
