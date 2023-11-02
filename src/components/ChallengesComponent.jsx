import { useState } from "react";
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
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold dark:bg-[#010101]">
        Challenging me!
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
            Select a language!
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
                stroke-width="2"
                stroke=""
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l4 4" />
                <path d="M5 12l4 -4" />
              </svg>{" "}
            </button>
            <p className="text-sm">{childName}</p>
            <button className="pr-3" onClick={incrementVideoPosition}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right stroke-[#626366] dark:stroke-white"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>{" "}
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
