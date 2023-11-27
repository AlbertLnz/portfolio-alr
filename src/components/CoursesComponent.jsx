import { useState } from "react";
import { useTranslation } from "react-i18next";
import CoursesTimeLineComponent from "./CoursesTimeLineComponent";

const CoursesComponent = () => {
  const [t] = useTranslation("global");
  const numOfCourses = 12;
  const [selectorCourse, setSelectorCourse] = useState(1);
  const [typeColor, setTypeColor] = useState("");

  const handleIncrementCourse = () => {
    selectorCourse >= 1 && selectorCourse < numOfCourses
      ? setSelectorCourse(selectorCourse + 1)
      : selectorCourse;
  };

  const handleDecrementCourse = () => {
    selectorCourse > 1 ? setSelectorCourse(selectorCourse - 1) : selectorCourse;
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="flex pl-4 text-2xl font-extrabold dark:bg-transparent">
        {t("coursesSection.title")}
      </h3>
      <div className="flex-grow rounded-lg bg-[#f6f7f9] dark:bg-[#171719]">
        <div className="flex justify-between items-center my-4">
          <p className="text-lg font-bold line-clamp-1 text-center w-full">
            {t(`coursesSection.courses.${selectorCourse}.title`)}
          </p>
          <p
            className={`text-sm font-bold mr-2 px-4 rounded-full text-black ${typeColor}`}
          >
            {t(`coursesSection.courses.${selectorCourse}.type`)}
          </p>
        </div>
        <div className="flex items-center justify-end mr-2 gap-2">
          <a
            href={t(`coursesSection.courses.${selectorCourse}.certificate`)}
            className="text-black text-xs rounded-full px-3 py.0.5 bg-[#d1d3d9] hover:bg-white"
          >
            {t("coursesSection.buttons.certificate")}
          </a>
          <a
            href={t(`coursesSection.courses.${selectorCourse}.link_course`)}
            className="text-black text-xs rounded-full px-3 py.0.5 bg-[#d1d3d9] hover:bg-white"
          >
            {t("coursesSection.buttons.course_link")}
          </a>
          <p className="text-black text-xs rounded-md px-3 py.0.5 bg-white">
            {t(`coursesSection.courses.${selectorCourse}.date`)}
          </p>
        </div>

        <div className="flex place-items-center justify-center mx-3 mt-4 rounded-lg">
          <button
            className="flex items-center justify-center py-2 px-2 hover:bg-[#d1d5db] hover:dark:bg-[#23272f] rounded-md"
            onClick={handleDecrementCourse}
          >
            <svg
              viewBox="0 0 2048 2048"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              className="fill-[#626366] dark:fill-white"
            >
              <path
                fill=""
                d="M 2048 169.646 L 2048 1961.646 L 0 1961.646 L 0 169.646 L 384 169.646 L 384 41.646 L 512 41.646 L 512 169.646 L 1536 169.646 L 1536 41.646 L 1664 41.646 L 1664 169.646 L 2048 169.646 Z M 128 297.646 L 128 553.646 L 1920 553.646 L 1920 297.646 L 1664 297.646 L 1664 425.646 L 1536 425.646 L 1536 297.646 L 512 297.646 L 512 425.646 L 384 425.646 L 384 297.646 L 128 297.646 Z M 1920 1833.646 L 1920 681.646 L 128 681.646 L 128 1833.646 L 1920 1833.646 Z"
                transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, 0)"
              />
              <path
                fill=""
                d="M 771.249 826.724 L 1200.249 1255.724 L 771.249 1684.724 L 681.249 1594.724 L 1020.249 1255.724 L 681.249 916.724 L 771.249 826.724"
                style={{
                  transformOrigin: "940.749px 1255.72px",
                  transform:
                    "matrix(-1, 0, 0, -1, 0.000056073011, -0.000169293642)",
                }}
              />
            </svg>
          </button>

          <div className="flex  grow">
            <CoursesTimeLineComponent
              position={selectorCourse}
              setColor={setTypeColor}
            />
          </div>

          <button
            className="flex items-center justify-center py-2 px-2 hover:bg-[#d1d5db] hover:dark:bg-[#23272f] rounded-md"
            onClick={handleIncrementCourse}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              className="fill-[#626366] dark:fill-white"
              viewBox="0 0 2048 2048"
            >
              <path
                fill=""
                d="M2048 128v1792H0V128h384V0h128v128h1024V0h128v128h384zM128 256v256h1792V256h-256v128h-128V256H512v128H384V256H128zm1792 1536V640H128v1152h1792zM877 787l429 429l-429 429l-90-90l339-339l-339-339l90-90z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesComponent;
