import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import challengesVideos from "../services/ChallengesVideos";

const ChallengeComponent_child = ({ technology, num_video, onNameChange }) => {
  const video = challengesVideos[technology][num_video].video;
  const poster = challengesVideos[technology][num_video].poster;
  onNameChange(challengesVideos[technology][num_video].name); // send name info to parent

  return (
    <div>
      <Video poster={poster}>
        <source src={video} type="video/mp4" />
      </Video>
    </div>
  );
};

export default ChallengeComponent_child;
