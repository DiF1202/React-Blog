import React from "react";
import ReactAplayer from "react-aplayer";

export default class App extends React.Component {
  // event binding example
  onPlay = () => {
    // console.log("on play");
  };

  onPause = () => {
    // console.log("on pause");
  };

  // example of access aplayer instance
  onInit = (ap) => {
    this.ap = ap;
  };

  render() {
    const props = {
      theme: "#F57F17",
      lrcType: 3,
      audio: [
        {
          name: "夏夜灯塔",
          artist: "沈以诚",
          url: "https://difei-1305004956.cos.ap-shanghai.myqcloud.com/%E5%8D%9A%E5%AE%A2%E9%9F%B3%E4%B9%90/%E5%A4%8F%E5%A4%9C%E7%81%AF%E5%A1%94/xiayedengta.mp3",
          cover:
            "https://difei-1305004956.cos.ap-shanghai.myqcloud.com/%E5%8D%9A%E5%AE%A2%E9%9F%B3%E4%B9%90/%E5%A4%8F%E5%A4%9C%E7%81%AF%E5%A1%94/xiayedengta.jpg",
          lrc: "http://101.34.216.21:3000/lyric?id=1944644041",
          theme: "#ebd0c2",
        },
      ],
    };

    return (
      <div>
        <ReactAplayer
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
      </div>
    );
  }
}
