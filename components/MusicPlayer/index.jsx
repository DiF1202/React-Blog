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
          name: "寻宝",
          artist: "沈以诚",
          url: "http://m801.music.126.net/20220602222432/4cc27165e6eb022aefb99674e50b9c55/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/5725808423/c4db/0a84/7cbf/59b7ef383d39f1a2e0381b156d14ca04.mp3",
          cover:
            "http://m801.music.126.net/20220602222224/795b7588c00254f4b01d854207c76bd7/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14491882612/874d/09e2/dda8/3132198d092798ce47ce31fa96c1784d.mp3",
          lrc: "http://101.34.216.21:3000/lyric?id=1441214393",
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
