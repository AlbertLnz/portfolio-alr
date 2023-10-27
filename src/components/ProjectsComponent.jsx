import image from "../assets/images/projects_imgs/restaurant.png";

const ProjectsComponent = () => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold bg-[#010101]">
        Projects
      </h3>
      <div className="flex-grow grid grid-cols-10 grid-rows-6 rounded-lg bg-[#171719]">
        <img
          src={image}
          alt="project"
          className="col-span-4 row-span-5 p-4 h-full object-cover rounded-lg"
        />
        <div className="col-span-6  row-span-5 rounded-tr-lg bg-[#4848ab]">
          projects
        </div>

        <div className="col-span-10 row-span-1 rounded-b-lg bg-[#8989b2]">
          navegació
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
