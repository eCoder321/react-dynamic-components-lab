import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
  checkOpacity() {
    return this.props.opacity > 0.2 ? <ColorBox opacity={this.props.opacity-0.1}/> : null
  }

  render() {
    const opacity = this.props.opacity
    return (
      <div className="color-box" style={{opacity: opacity /*replace null with the value*/}}>
        {this.checkOpacity()}
        {/* {opacity > 0.2 ? <ColorBox opacity={opacity-0.1}/> : null} */}
      </div>
    )
  }

}

