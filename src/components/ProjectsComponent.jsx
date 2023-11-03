import { useState } from "react";
import { useTranslation } from "react-i18next";
import projectImages from "../services/ProjectImages";
import ProjectComponent_child from "./ProjectComponent_child";

const ProjectsComponent = () => {
  const [t] = useTranslation("global");
  const [positionProject, setPositionProject] = useState(0);
  const projects_number = 6;

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
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold dark:bg-[#010101]">
        {t("projectsSection.title")}
      </h3>
      <div className="flex flex-col grow rounded-lg bg-[#f6f7f9] dark:bg-[#171719]">
        <ProjectComponent_child
          project_position={positionProject}
          image={projectImages[positionProject]}
        />

        <div className="flex grow justify-between mx-14 rounded-b-lg items-end mb-2">
          <button onClick={handleDecrementPositionSlider}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-badge-left-filled w-8 fill-[#626366] dark:fill-white"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z"
                strokeWidth="0"
                fill=""
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-heart w-8 fill-[#626366] dark:fill-white stroke-[#626366] dark:stroke-white"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </button>
          <button onClick={handleIncrementPositionSlider}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-badge-right-filled w-8 fill-[#626366] dark:fill-white"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="none"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z"
                strokeWidth="0"
                fill=""
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectsComponent;
