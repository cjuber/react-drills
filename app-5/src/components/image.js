import React, { Component } from "react";


class Image extends Component {
  render() {
    return (
      <div>
<img src={this.props.image}></img>
      <caption>ERROR 420</caption> 
      </div>
    );
  }
}

export default Image;
