import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {

  render() {
    const gifs = [
      { id: "chbjWu4ljDcEjyrWDN" },
      { id: "TLmMAirE93GeBmXsfA" }
    ]

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="chbjWu4ljDcEjyrWDN" />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={gifs} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
