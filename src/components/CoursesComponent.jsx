import { useState } from "react";
import { useTranslation } from "react-i18next";
import calendar_back from "../assets/images/CoursesComponent/calendar_back.svg";
import calendar_now from "../assets/images/CoursesComponent/calendar_now.svg";
import calendar_timeline from "../assets/images/CoursesComponent/calendar_timeline.png";

const CoursesComponent = () => {
  const [t] = useTranslation("global");
  const numOfCourses = 3;
  const [selectorCourse, setSelectorCourse] = useState(0);

  const handleIncrementCourse = () => {
    selectorCourse >= 0 && selectorCourse < numOfCourses - 1
      ? setSelectorCourse(selectorCourse + 1)
      : selectorCourse;
  };

  const handleDecrementCourse = () => {
    selectorCourse > 0 ? setSelectorCourse(selectorCourse - 1) : selectorCourse;
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold bg-[#010101]">
        Courses
      </h3>
      <div className="flex-grow grid grid-cols-10 rounded-lg bg-[#171719]">
        <div className="col-span-2 flex flex-col place-items-center ml-3 my-2 rounded-lg">
          <button
            className="flex items-center justify-center h-full w-1/2 rounded-t-xl border borde-white bg-[#010101] hover:bg-[#23272f]"
            onClick={handleIncrementCourse}
          >
            <img src={calendar_now} alt="calendar_now" />
          </button>
          <button
            className="flex items-center justify-center h-full w-1/2 rounded-b-xl border borde-white bg-[#010101] hover:bg-[#23272f]"
            onClick={handleDecrementCourse}
          >
            <img src={calendar_back} alt="calendar_back" />
          </button>
        </div>
        <div className="col-span-8 grid grid-rows-3 mr-3 my-2 rounded-lg">
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">
              {t(`coursesSection.courses.${selectorCourse}.title`)}
            </p>
            <p className="text-sm font-bold mr-2 px-4 py-0.5 rounded-full text-black bg-yellow-300">
              {t(`coursesSection.courses.${selectorCourse}.type`)}
            </p>
          </div>
          <div className="flex items-center gap-6 ml-4">
            <a
              href={t(`coursesSection.courses.${selectorCourse}.certificate`)}
              className="text-black text-sm rounded-full px-4 py.0.5 bg-slate-200"
            >
              Certificate
            </a>
            <a
              href={t(`coursesSection.courses.${selectorCourse}.link_course`)}
              className="text-black text-sm rounded-full px-4 py.0.5 bg-slate-200"
            >
              Course
            </a>
            <p className="text-black text-sm rounded-full px-4 py.0.5 bg-slate-200">
              {t(`coursesSection.courses.${selectorCourse}.date`)}
            </p>
          </div>
          <div className="flex place-items-end">
            <img src={calendar_timeline} alt="" className="w-6" />
            <p>{selectorCourse}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesComponent;
