import { useState } from "react";
import { useTranslation } from "react-i18next";
import arrow_to_left from "../assets/images/ProjectsComponent/arrow_to_left.svg";
import arrow_to_right from "../assets/images/ProjectsComponent/arrow_to_right.svg";
import heart from "../assets/images/ProjectsComponent/heart.svg";
import ProjectComponent_child from "./ProjectComponent_child";

const ProjectsComponent = () => {
  const [t] = useTranslation("global");
  const [positionProject, setPositionProject] = useState(0);
  const projects_number = 2;

  const handleDecrementPositionSlider = () => {
    positionProject > 0
      ? setPositionProject(positionProject - 1)
      : positionProject;
  };

  const handleIncrementPositionSlider = () => {
    positionProject >= 0 && positionProject < projects_number - 1
      ? setPositionProject(positionProject + 1)
      : positionProject;
  };

  return (
    <>
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold bg-[#010101] h-[12%]">
        {t("projectsSection.title")}
      </h3>
      <div className="grid grid-cols-2 rounded-lg bg-[#171719] h-[88%] pb-1">
        <ProjectComponent_child project_position={positionProject} />

        <div className="col-span-2 flex justify-between items-end mx-14 rounded-b-lg">
          <button onClick={handleDecrementPositionSlider}>
            <img src={arrow_to_left} alt="arrow_to_left" />
          </button>
          <button>
            <img src={heart} alt="heart" />
          </button>
          <button onClick={handleIncrementPositionSlider}>
            <img src={arrow_to_right} alt="arrow_to_right" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectsComponent;
