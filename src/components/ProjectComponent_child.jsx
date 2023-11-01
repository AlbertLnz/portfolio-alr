import { useState } from "react";
import { useTranslation } from "react-i18next";
import linkedin from "../assets/images/ProjectsComponent/linkedin.svg";
import projectContributors from "../services/ProjectContributors";
import projectTechnologies from "../services/ProjectTechnologies";

const ProjectComponent_child = ({ project_position, image }) => {
  const [t] = useTranslation("global");
  const [selector, setSelector] = useState("description");

  return (
    <div className="flex grow mx-4 gap-2 my-4">
      <div className="h-full rounded-lg w-full mx-4">
        <img
          src={image}
          alt="project"
          className="object-cover rounded-lg h-full"
        />
      </div>

      <div className="flex flex-col rounded-tr-lg h-full w-full">
        <h4 className="text-center text-lg font-bold">
          {t(`projectsSection.projects.${project_position}.title`)}
        </h4>
        <div className="flex place-content-center gap-6 pt-1">
          <button onClick={() => setSelector("description")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-message-2 w-6 hover:stroke-lime-500"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 9h8" />
              <path d="M8 13h6" />
              <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" />
            </svg>
          </button>
          <a
            href={t(`projectsSection.projects.${project_position}.github`)}
            target="_blank"
            onClick={() => setSelector("github")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github-filled w-6 hover:cursor-alias"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                className="hover:fill-fuchsia-400"
                d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                stroke-width="0"
                fill="#ffffff"
              ></path>
            </svg>
          </a>
          <a
            href={t(`projectsSection.projects.${project_position}.deploy`)}
            target="_blank"
            onClick={() => setSelector("deploy")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-rocket w-6 hover:stroke-[#ff5e00] hover:cursor-alias"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
              <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
              <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </a>
          <button onClick={() => setSelector("contributors")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-users-group w-6 hover:stroke-pink-600"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
              <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M17 10h2a2 2 0 0 1 2 2v1" />
              <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
            </svg>
          </button>
        </div>
        {selector !== "contributors" ? (
          <div className="flex-grow text-xs pt-2 mx-2">
            <p className="line-clamp-6 overflow-y-auto">
              {t(`projectsSection.projects.${project_position}.description`)}
            </p>
            <div className="flex mt-4">
              {projectTechnologies[project_position].map((item) => (
                <p
                  key={item.tech}
                  className={`mx-1 font-semibold bg-[#23272f] ${item.color} px-2 py-0.5 rounded-full`}
                >
                  {item.tech}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <ul className="flex-grow text-xs pt-2 mx-2 overflow-y-auto max-h-full	">
            {projectContributors[project_position].map((item) => (
              <li className="flex items-center justify-between border-2 border-white rounded-full w-full my-1">
                <img
                  src={item.linkedin_photo}
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                <p key={item.nombre} className="pl-2">
                  {item.nombre}
                </p>
                <p className="mx-2">{item.tech}</p>
                <a href={item.linkedin} target="_blank">
                  <img
                    src={linkedin}
                    alt="linkedin_icon"
                    className="w-6 h-6 flex rounded-r-full justify-self-end hover:cursor-alias"
                  />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectComponent_child;
