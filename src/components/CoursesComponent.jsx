import { useState } from "react";
import { useTranslation } from "react-i18next";
import calendar_back from "../assets/images/CoursesComponent/calendar_back.svg";
import calendar_now from "../assets/images/CoursesComponent/calendar_now.svg";
import calendar_timeline from "../assets/images/CoursesComponent/calendar_timeline.png";
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
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold bg-[#010101]">
        Courses
      </h3>
      <div className="flex-grow grid grid-cols-10 rounded-lg bg-[#171719]">
        <div className="col-span-2 flex flex-col place-items-center justify-center ml-3 my-2 rounded-lg">
          <button
            className="flex items-center justify-center py-2 px-2 hover:bg-[#23272f]"
            onClick={handleDecrementCourse}
          >
            <img src={calendar_back} alt="calendar_back" />
          </button>

          <button
            className="flex items-center justify-center py-2 px-2 hover:bg-[#23272f]"
            onClick={handleIncrementCourse}
          >
            <img src={calendar_now} alt="calendar_now" />
          </button>
        </div>
        <div className="col-span-8 grid grid-rows-3 mr-3 my-2 rounded-lg">
          <div className="flex justify-between items-center">
            <p className="text-md font-bold line-clamp-1">
              {t(`coursesSection.courses.${selectorCourse}.title`)}
            </p>
            <p
              className={`text-sm font-bold mr-2 px-4 py-0.5 rounded-full text-black ${typeColor}`}
            >
              {t(`coursesSection.courses.${selectorCourse}.type`)}
            </p>
          </div>
          <div className="flex items-center gap-6 ml-4">
            <a
              href={t(`coursesSection.courses.${selectorCourse}.certificate`)}
              className="text-black text-xs rounded-full px-3 py.0.5 bg-slate-200"
            >
              Certificate
            </a>
            <a
              href={t(`coursesSection.courses.${selectorCourse}.link_course`)}
              className="text-black text-xs rounded-full px-3 py.0.5 bg-slate-200"
            >
              Course
            </a>
            <p className="text-black text-xs rounded-full px-3 py.0.5 bg-slate-200">
              {t(`coursesSection.courses.${selectorCourse}.date`)}
            </p>
          </div>
          <div className="flex place-items-end">
            <img src={calendar_timeline} alt="" className="w-6" />
            <CoursesTimeLineComponent
              position={selectorCourse}
              color={handleColorOfType}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesComponent;
