import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  render() {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} replaceF={this.props.replaceF} />
    });
  }
}

export default GifList;
