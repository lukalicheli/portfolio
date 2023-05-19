import React from "react";
import igClone from "./ig-clone.mp4";

function Video() {
  return (
    <video controls width="100%" style={{ width: "75%" }}>
      <source src={igClone} type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
  );
}

export default Video;
