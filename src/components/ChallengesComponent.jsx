import { useState } from "react";
import arrow_left from "../assets/images/ChallengeComponent/arrow_left.svg";
import arrow_right from "../assets/images/ChallengeComponent/arrow_right.svg";
import ChallengeComponent_child from "./ChallengeComponent_child";

const ChallengesComponent = () => {
  const [childName, setChildName] = useState(""); // Estado para almacenar el nombre del hijo
  const [languageSelected, setLanguageSelected] = useState(null);
  const [videoSelected, setvideoSelected] = useState(0);
  const videos_max = 2;

  const handleChildNameChange = (name) => {
    setChildName(name);
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
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold bg-[#010101]">
        Challenging me!
      </h3>
      <div className="flex-grow grid grid-cols-10 grid-rows-6 rounded-lg bg-[#171719]">
        <div className="col-span-10 row-span-1 rounded-t-lg flex items-center justify-center">
          <button
            className={`text-sm w-1/3 h-full font-bold rounded-tl-lg ${
              languageSelected === 0 ? "bg-[#7377ad]" : ""
            } hover:bg-[#7377ad]`}
            onClick={() => handleLanguage("php")}
          >
            PHP
          </button>
          <button
            className={`text-sm w-1/3 h-full font-bold ${
              languageSelected === 1 ? "bg-[#dab92d]" : ""
            } hover:bg-[#dab92d]`}
            onClick={() => handleLanguage("javascript")}
          >
            JavaScript
          </button>
          <button
            className={`text-sm w-1/3 h-full font-bold rounded-tr-lg ${
              languageSelected === 2 ? "bg-[#366e9d]" : ""
            } hover:bg-[#366e9d]`}
            onClick={() => handleLanguage("python")}
          >
            Python
          </button>
        </div>
        {languageSelected === null ? (
          <p className="col-span-10 row-span-1 flex justify-center items-center gap-4 mx-3 mb-2 rounded-lg bg-black text-center italic text-sm">
            Select a language!
          </p>
        ) : (
          <div className="col-span-10 row-span-1 flex justify-between items-center gap-4 mx-3 mb-2 mt-1 rounded-lg bg-black">
            <button className="pl-3" onClick={decrementVideoPosition}>
              <img src={arrow_left} alt="arrow_left" />
            </button>
            <p className="text-sm">{childName}</p>
            <button className="pr-3" onClick={incrementVideoPosition}>
              <img src={arrow_right} alt="arrow_right" />
            </button>
          </div>
        )}

        <div className="col-span-10 row-span-4 flex flex-grow mx-3 mb-2 rounded-lg">
          {languageSelected != null && (
            <ChallengeComponent_child
              technology={languageSelected}
              num_video={videoSelected}
              onNameChange={handleChildNameChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengesComponent;
