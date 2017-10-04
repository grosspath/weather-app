import React, { Component } from 'react';
var Skycons = require('react-skycons').default;

class BuildIcon extends React.Component {

  render() {
    let icon = this.props.icon.toUpperCase().replace(/-/g, '_');
    return (
      <Skycons color="white" icon={icon} />
    );
  }
};

export default BuildIcon;
