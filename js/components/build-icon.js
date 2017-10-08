import React, { Component } from 'react';
var Skycons = require('react-skycons').default;

class BuildIcon extends React.Component {

  render() {
    let icon = this.props.icon.toUpperCase().replace(/-/g, '_');
    return (
      <div className="child">
        <Skycons color="black" icon={icon} />
      </div>
    );
  }
};

export default BuildIcon;
