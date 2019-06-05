import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    const regex = /\media\/(.+)\/giphy.gif/;
    const gifId = event.target.src.match(regex)[1];
    this.props.replaceF(gifId);
    // call a method in the app to update the state of the selectedGif
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    )
  }
}

export default Gif;
