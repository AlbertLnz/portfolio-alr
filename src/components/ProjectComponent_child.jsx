import { useState } from "react";
import { useTranslation } from "react-i18next";
import contributors_icon from "../assets/images/ProjectsComponent/contributors.svg";
import deploy_icon from "../assets/images/ProjectsComponent/deploy.svg";
import description_icon from "../assets/images/ProjectsComponent/description.svg";
import github_icon from "../assets/images/ProjectsComponent/github.svg";
import projectContributors from "../services/ProjectContributors";
import projectTechnologies from "../services/ProjectTechnologies";

const ProjectComponent_child = ({ project_position }) => {
  const [t] = useTranslation("global");
  const [selector, setSelector] = useState("description");

  return (
    <>
      <div className="col-span-4 row-span-5 flex justify-center px-2 h-full">
        <img
          src={t(`projectsSection.projects.${project_position}.image`)}
          alt="project"
          className="w-11/12 h-full object-cover rounded-lg"
        />
      </div>

      <div className="col-span-6 row-span-5 flex flex-col rounded-tr-lg h-full pr-2">
        <h4 className="text-center text-2xl font-bold">
          {t(`projectsSection.projects.${project_position}.title`)}
        </h4>
        <div className="flex place-content-center gap-6 pt-2">
          <button onClick={() => setSelector("contributors")}>
            <img src={contributors_icon} alt="contributors" />
          </button>
          <a
            href={t(`projectsSection.projects.${project_position}.github`)}
            target="_blank"
            onClick={() => setSelector("github")}
          >
            <img src={github_icon} alt="github" />
          </a>
          <a
            href={t(`projectsSection.projects.${project_position}.deploy`)}
            target="_blank"
            onClick={() => setSelector("deploy")}
          >
            <img src={deploy_icon} alt="deploy" />
          </a>
          <button onClick={() => setSelector("description")}>
            <img src={description_icon} alt="description" />
          </button>
        </div>
        {selector !== "contributors" ? (
          <div className="text-xs pt-4 mx-2 h-40 mb-4">
            <p className="w-11/12">
              {t(`projectsSection.projects.${project_position}.description`)}
            </p>
            <div className="flex mt-4">
              {projectTechnologies[project_position].map((item) => (
                <p key={item.tech} className="mx-2">
                  {item.tech}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-xs pt-4 mx-2 h-40 mb-4 w-11/12">
            {projectContributors[project_position].map((item) => (
              <p key={item.nombre}>{item.nombre}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectComponent_child;
