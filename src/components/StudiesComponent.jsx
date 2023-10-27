import image from "../assets/images/ProjectsComponent/restaurant.png";

const StudiesComponent = () => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold bg-[#010101]">
        Studies
      </h3>
      <div className="flex-grow grid grid-cols-10 rounded-lg bg-[#171719]">
        <img
          src={image}
          alt="project"
          className="col-span-4 h-full rounded-lg object-cover p-3"
        />
        <ul className="col-span-5 flex flex-col">
          <li>Grau deconomia</li>
          <li>Universitat de Barcelona</li>
          <li>Barcelona</li>
          <li>2020 - 2023</li>
        </ul>
        <div className="col-span-1 flex flex-col">
          <button>·</button>
          <button>·</button>
          <button>·</button>
          <button>·</button>
          <button>·</button>
        </div>
      </div>
    </div>
  );
};

export default StudiesComponent;
