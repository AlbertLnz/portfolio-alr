import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { useTranslation } from "react-i18next";
import challengesVideos from "../services/ChallengesVideos";

const ChallengeComponent_child = ({
  technology,
  num_video,
  onNameChange,
  onGithubRepo,
  onChallengeUrl,
}) => {
  const [t] = useTranslation("global");
  const video = challengesVideos[technology][num_video].video;
  const poster = challengesVideos[technology][num_video].poster;
  onNameChange(t(`challengesSection.challenges.${technology}.${num_video}`)); // send name info to parent
  onGithubRepo(challengesVideos[technology][num_video].github_repository); // send github repository info to parent
  onChallengeUrl(challengesVideos[technology][num_video].challenge_url); // send challenge url info to parent

  return (
    <div className="w-full h-full relative">
      <Video
        poster={poster}
        className="w-full h-full py-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#ffffff] dark:bg-black"
      >
        <source src={video} type="video/mp4" />
      </Video>
    </div>
  );
};

export default ChallengeComponent_child;
