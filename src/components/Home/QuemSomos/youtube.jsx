import React from 'react';
import YouTube from 'react-youtube';
import './youtube.css';
 
class Youtuber extends React.Component {
  render() {

    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: -1,
      },
    };
 
    return <YouTube videoId="LiNm9JxvNOM" opts={opts} className='youtube' onReady={this._onReady} />;
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtuber;