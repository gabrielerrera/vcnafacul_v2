import React from 'react';
import YouTube from 'react-youtube';
 
class Youtuber extends React.Component {
  render() {

    const opts = {
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: -1,
      },
    };
 
    return <YouTube videoId="VjjV8ROzMho" opts={opts} onReady={this._onReady} />;
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtuber;