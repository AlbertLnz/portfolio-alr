import { useState } from "react";
import ToolsComponentLibrariesModal from "./ToolsComponentLibrariesModal";

const ToolTechComponent_child = ({ image, name, website }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="flex w-full rounded-md bg-[#d1d5db] dark:bg-[#212121]">
      <img className="w-12 p-2 rounded-l-md h-full" src={image} alt={name} />
      <p className="flex items-center w-full text-xl font-bold pl-1">{name}</p>

      <div className="flex justify-end">
        <button
          className="px-2 hover:bg-indigo-200 hover:dark:bg-indigo-400 flex items-center"
          onClick={() => setOpenModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-book-2 w-6 stroke-[#626366] dark:stroke-white"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
            <path d="M19 16h-12a2 2 0 0 0 -2 2" />
            <path d="M9 8h6" />
          </svg>
        </button>
        <a
          className="flex px-2 rounded-r-md hover:bg-indigo-200 hover:dark:bg-indigo-400 items-center"
          href={website}
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-world-www w-6 stroke-[#626366] dark:stroke-white"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
            <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
            <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
            <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
            <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
            <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
            <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
            <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
            <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
          </svg>
        </a>
      </div>
      {openModal && (
        <ToolsComponentLibrariesModal
          name={name}
          openModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ToolTechComponent_child;
