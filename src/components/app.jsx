import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "chbjWu4ljDcEjyrWDN"
    }
  }

  replaceGif = (gifId) => {
    this.setState({
      selectedGifId: gifId
    });
  }

  search = (query) => {
    // return a list of gifs and update the state of the App
    giphy("wALTMYblLBjK3XIHeNwbPZtQd15pMXRj").search({
        q: query,
        rating: 'g',
        limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchF={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} replaceF={this.replaceGif} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
