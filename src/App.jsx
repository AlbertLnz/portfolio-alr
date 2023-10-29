import ChallengesComponent from "./components/ChallengesComponent";
import ColorThemeSelectorComponent from "./components/ColorThemeSelectorComponent";
import CoursesComponent from "./components/CoursesComponent";
import LanguageSelectorComponent from "./components/LanguageSelectorComponent";
import LanguagesComponent from "./components/LanguagesComponent";
import NameComponent from "./components/NameComponent";
import OpenToWorkComponent from "./components/OpenToWorkComponent";
import PhotoComponent from "./components/PhotoComponent";
import PortfolioTechUsedComponent from "./components/PortfolioTechUsedComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import StudiesComponent from "./components/StudiesComponent";
import ToolsComponent from "./components/ToolsComponent";

function App() {
  return (
    <div className="h-screen">
      <div className="grid lg:grid-rows-10 lg:grid-cols-10 h-full dark:bg-[#010101] dark:text-white">
        <section className="lg:row-span-2 lg:col-span-2 p-3">
          <PhotoComponent />
        </section>
        <section className="lg:row-span-2 lg:col-span-5 p-3">
          <NameComponent />
        </section>
        <section className="lg:row-span-2 lg:col-span-1 p-3">
          <OpenToWorkComponent />
        </section>
        <section className="lg:row-span-2 lg:col-span-1 p-3">
          <LanguageSelectorComponent />
        </section>
        <section className="lg:row-span-2 lg:col-span-1 p-3">
          <ColorThemeSelectorComponent />
        </section>
        <section className="lg:row-span-5 lg:col-span-4 pl-3">
          <ProjectsComponent />
        </section>
        <section className="lg:row-span-4 lg:col-span-3 px-3">
          <ChallengesComponent />
        </section>
        <section className="lg:row-span-5 lg:col-span-3 pr-3">
          <ToolsComponent />
        </section>
        <section className="lg:row-span-4 lg:col-span-3 p-3">
          <StudiesComponent />
        </section>
        <section className="lg:row-span-3 lg:col-span-4 py-3 pl-3">
          <CoursesComponent />
        </section>
        <section className="lg:row-span-3 lg:col-span-1 py-3">
          <LanguagesComponent />
        </section>
        <section className="lg:row-span-3 lg:col-span-2 p-3">
          <PortfolioTechUsedComponent />
        </section>
      </div>
    </div>
  );
}

export default App;
