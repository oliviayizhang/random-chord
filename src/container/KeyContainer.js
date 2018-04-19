import React from 'react';

class KeyContainer extends React.Component {
  render() {
    return (
      <div>
        <h3>display random KEY</h3>
        <div>Key: {this.props.music_key}</div>
      </div>
    )
  }
}

export default KeyContainer;
