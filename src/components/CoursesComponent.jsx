import { useState } from "react";
import { useTranslation } from "react-i18next";
import calendar_back from "../assets/images/CoursesComponent/calendar_back.svg";
import calendar_now from "../assets/images/CoursesComponent/calendar_now.svg";
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

  const handleColorOfType = (color) => {
    setTypeColor(color);
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold dark:bg-[#010101]">
        Courses
      </h3>
      <div className="flex-grow rounded-lg bg-[#f6f7f9] dark:bg-[#171719]">
        <div className="flex justify-between items-center my-4">
          <p className="text-lg font-bold line-clamp-1 text-center w-full">
            {t(`coursesSection.courses.${selectorCourse}.title`)}
          </p>
          <p
            className={`text-sm font-bold mr-2 px-4 py-0.5 rounded-full text-black ${typeColor}`}
          >
            {t(`coursesSection.courses.${selectorCourse}.type`)}
          </p>
        </div>
        <div className="flex items-center justify-end mr-2 gap-2">
          <a
            href={t(`coursesSection.courses.${selectorCourse}.certificate`)}
            className="text-black text-xs rounded-full px-3 py.0.5 bg-[#d1d3d9] hover:bg-white"
          >
            Certificate
          </a>
          <a
            href={t(`coursesSection.courses.${selectorCourse}.link_course`)}
            className="text-black text-xs rounded-full px-3 py.0.5 bg-[#d1d3d9] hover:bg-white"
          >
            Course
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
            <img src={calendar_back} alt="calendar_back" />
          </button>

          <div className="flex  grow">
            <CoursesTimeLineComponent
              position={selectorCourse}
              color={handleColorOfType}
            />
          </div>

          <button
            className="flex items-center justify-center py-2 px-2 hover:bg-[#d1d5db] hover:dark:bg-[#23272f] rounded-md"
            onClick={handleIncrementCourse}
          >
            <img src={calendar_now} alt="calendar_now" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesComponent;
