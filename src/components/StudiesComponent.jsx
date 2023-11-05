import { useState } from "react";
import { useTranslation } from "react-i18next";
import studyImages from "../services/StudiesImages";

const StudiesComponent = () => {
  const [t] = useTranslation("global");
  const [visibleStudy, setVisibleStudy] = useState(1);

  return (
    <div className="h-full flex flex-col">
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold dark:bg-transparent">
        {t("studiesSection.title")}
      </h3>
      <div className="flex-grow grid grid-cols-10 rounded-lg p-3 bg-[#f6f7f9] dark:bg-[#171719]">
        <div className="col-span-9 carousel carousel-vertical mx-3">
          <div id="item1" className={`carousel-item h-full grid grid-cols-9`}>
            <img
              src={studyImages[visibleStudy - 1]}
              alt="photo_study"
              className={`col-span-4 rounded-lg object-cover h-full ${
                visibleStudy === 1 ? "block" : "hidden"
              }`}
            />
            <ul
              className={`ml-2 col-span-5 ${
                visibleStudy === 1 ? "block h-full" : "hidden"
              }`}
            >
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.study")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.1.title")}
              </li>
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.academy")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.1.academy")}
              </li>
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.period")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.1.period")}
              </li>
            </ul>
          </div>
          <div id="item2" className="carousel-item h-full grid grid-cols-9">
            <img
              src={studyImages[visibleStudy - 1]}
              alt="photo_study"
              className={`col-span-4 rounded-lg object-cover h-full ${
                visibleStudy === 2 ? "block" : "hidden"
              }`}
            />
            <ul
              className={`ml-2 col-span-5 ${
                visibleStudy === 2 ? "block h-full" : "hidden"
              }`}
            >
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.study")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.2.title")}
              </li>
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.academy")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.2.academy")}
              </li>
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.period")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.2.period")}
              </li>
            </ul>
          </div>
          <div id="item3" className="carousel-item h-full grid grid-cols-9">
            <img
              src={studyImages[visibleStudy - 1]}
              alt="photo_study"
              className={`col-span-4 rounded-lg object-cover h-full ${
                visibleStudy === 3 ? "block" : "hidden"
              }`}
            />
            <ul
              className={`ml-2 col-span-5 ${
                visibleStudy === 3 ? "block h-full" : "hidden"
              }`}
            >
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.study")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.3.title")}
              </li>
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.academy")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.3.academy")}
              </li>
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.period")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.3.period")}
              </li>
            </ul>
          </div>
          <div id="item4" className="carousel-item h-full grid grid-cols-9">
            <img
              src={studyImages[visibleStudy - 1]}
              alt="photo_study"
              className={`col-span-4 rounded-lg object-cover h-full ${
                visibleStudy === 4 ? "block" : "hidden"
              }`}
            />
            <ul
              className={`ml-2 col-span-5 ${
                visibleStudy === 4 ? "block h-full" : "hidden"
              }`}
            >
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.study")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.4.title")}
              </li>
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.academy")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.4.academy")}
              </li>
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.period")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.4.period")}
              </li>
            </ul>
          </div>
          <div id="item5" className="carousel-item h-full grid grid-cols-9">
            <img
              src={studyImages[visibleStudy - 1]}
              alt="photo_study"
              className={`col-span-4 rounded-lg object-cover h-full ${
                visibleStudy === 5 ? "block" : "hidden"
              }`}
            />
            <ul
              className={`ml-2 col-span-5 ${
                visibleStudy === 5 ? "block h-full" : "hidden"
              }`}
            >
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.study")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.5.title")}
              </li>
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.academy")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.5.academy")}
              </li>
              <li className="text-xs font-extrabold mt-2">
                {t("studiesSection.subtitles.period")}
              </li>
              <li className="ml-2 text-sm">
                {t("studiesSection.studies.5.period")}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center place-content-center w-full py-2">
          <a
            href="#item1"
            className={` w-full text-center ${
              visibleStudy === 1
                ? "text-2xl font-black text-[#74dc2e]"
                : "text-lg"
            }`}
            onClick={() => setVisibleStudy(1)}
          >
            ·
          </a>
          <a
            href="#item2"
            className={` w-full text-center ${
              visibleStudy === 2
                ? "text-2xl font-black text-[#74dc2e]"
                : "text-lg"
            }`}
            onClick={() => setVisibleStudy(2)}
          >
            ·
          </a>
          <a
            href="#item3"
            className={` w-full text-center ${
              visibleStudy === 3
                ? "text-2xl font-black text-[#74dc2e]"
                : "text-lg"
            }`}
            onClick={() => setVisibleStudy(3)}
          >
            ·
          </a>
          <a
            href="#item4"
            className={` w-full text-center ${
              visibleStudy === 4
                ? "text-2xl font-black text-[#74dc2e]"
                : "text-lg"
            }`}
            onClick={() => setVisibleStudy(4)}
          >
            ·
          </a>
          <a
            href="#item5"
            className={` w-full text-center ${
              visibleStudy === 5
                ? "text-2xl font-black text-[#74dc2e]"
                : "text-lg"
            }`}
            onClick={() => setVisibleStudy(5)}
          >
            ·
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudiesComponent;
