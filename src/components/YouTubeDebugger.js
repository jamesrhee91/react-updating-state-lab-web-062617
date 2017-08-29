import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
        }
      }
    }
  }


  // this.setState({
  //   addressInfo: {
  //     ...this.state.addressInfo,
  //     city: 'New York City',
  //   },
  // });

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return(
      <div className="youtube-debugger">
        <button className="bitrate" onClick={this.handleBitrate}/>
        <button className="resolution" onClick={this.handleResolution}/>
      </div>
    )
  }

}

export default YouTubeDebugger
