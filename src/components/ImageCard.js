import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
