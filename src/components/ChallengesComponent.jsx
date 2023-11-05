import { useState } from "react";
import { useTranslation } from "react-i18next";
import ChallengeComponent_child from "./ChallengeComponent_child";

const ChallengesComponent = () => {
  const [t] = useTranslation("global");
  const [childName, setChildName] = useState(""); // Estado para almacenar el nombre del hijo
  const [githubRepository, setGitubRepository] = useState(""); // Estado para almacenar el github repository del hijo
  const [challengeUrl, setChallengeUrl] = useState(""); // Estado para almacenar el challenge url del hijo
  const [languageSelected, setLanguageSelected] = useState(null);
  const [videoSelected, setvideoSelected] = useState(0);
  const videos_max = 2;

  const handleChildNameChange = (name) => {
    setChildName(name);
  };
  const handleGithubRepository = (name) => {
    setGitubRepository(name);
  };
  const handleChallengeUrl = (name) => {
    setChallengeUrl(name);
  };

  const incrementVideoPosition = () => {
    videoSelected < videos_max - 1 ? setvideoSelected(videoSelected + 1) : "";
  };

  const decrementVideoPosition = () => {
    videoSelected > 0 ? setvideoSelected(videoSelected - 1) : "";
  };

  const handleLanguage = (num_of_language) => {
    switch (num_of_language) {
      case "php":
        setLanguageSelected(0);
        break;
      case "javascript":
        setLanguageSelected(1);
        break;
      case "python":
        setLanguageSelected(2);
        break;
    }
    setvideoSelected(0);
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold dark:bg-transparent">
        {t("challengesSection.title")}
      </h3>
      <div className="flex-grow grid grid-cols-10 grid-rows-6 rounded-lg bg-[#f6f7f9] dark:bg-[#171719]">
        <div className="col-span-10 row-span-1 rounded-t-lg flex items-center justify-center">
          <button
            className={`text-sm w-1/3 h-full font-bold rounded-tl-lg ${
              languageSelected === 0 ? "bg-[#9ea1ce] dark:bg-[#7377ad]" : ""
            } hover:bg-[#9ea1ce] hover:dark:bg-[#7377ad]`}
            onClick={() => handleLanguage("php")}
          >
            PHP
          </button>
          <button
            className={`text-sm w-1/3 h-full font-bold ${
              languageSelected === 1 ? "bg-[#dcc976] dark:bg-[#dab92d]" : ""
            } hover:bg-[#dcc976] hover:dark:bg-[#dab92d]`}
            onClick={() => handleLanguage("javascript")}
          >
            JavaScript
          </button>
          <button
            className={`text-sm w-1/3 h-full font-bold rounded-tr-lg ${
              languageSelected === 2 ? "bg-[#85b7dd] dark:bg-[#366e9d]" : ""
            } hover:bg-[#85b7dd] hover:dark:bg-[#366e9d]`}
            onClick={() => handleLanguage("python")}
          >
            Python
          </button>
        </div>
        {languageSelected === null ? (
          <p className="col-span-10 row-span-1 flex justify-center items-center gap-4 mx-3 mb-2 rounded-lg bg-[#ffffff] dark:bg-black text-center italic text-sm">
            {t("challengesSection.subtitle")}
          </p>
        ) : (
          <div className="col-span-10 row-span-1 flex justify-between items-center gap-4 mx-3 mb-2 mt-1 rounded-lg bg-[#ffffff] dark:bg-black">
            <button className="pl-3" onClick={decrementVideoPosition}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-left stroke-[#626366] dark:stroke-white"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke=""
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l4 4" />
                <path d="M5 12l4 -4" />
              </svg>
            </button>
            <p className="text-sm">{childName}</p>
            <button className="pr-3" onClick={incrementVideoPosition}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right stroke-[#626366] dark:stroke-white"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </button>
          </div>
        )}
        {languageSelected != null && (
          <>
            <div className="col-span-10 row-span-4 flex flex-grow mx-3 mb-2 rounded-lg">
              <ChallengeComponent_child
                technology={languageSelected}
                num_video={videoSelected}
                onNameChange={handleChildNameChange}
                onGithubRepo={handleGithubRepository}
                onChallengeUrl={handleChallengeUrl}
              />
            </div>
            <div className="col-span-10 flex w-full text-xs items-center justify-between mb-2">
              <a href={githubRepository} target="_blank">
                <p className="bg-[#e2ece9] dark:bg-[#404040] hover:inner-border hover:inner-border-[#b73c79] ml-16 px-4 py-0.5 rounded-md">
                  {t("challengesSection.buttons.code")}
                </p>
              </a>
              <a href={challengeUrl} target="_blank">
                <p className="bg-[#e2ece9] dark:bg-[#404040] hover:inner-border hover:inner-border-[#b73c79] mr-16 px-4 py-0.5 rounded-md">
                  {t("challengesSection.buttons.challenge")}
                </p>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChallengesComponent;
