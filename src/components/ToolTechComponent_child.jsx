import { useState } from "react";
import book from "../assets/images/ToolsComponent/book.svg";
import worldwide from "../assets/images/ToolsComponent/worldwide.svg";
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
          className="px-2 hover:bg-indigo-400"
          onClick={() => setOpenModal(true)}
        >
          <img src={book} alt="book" className="w-16" />
        </button>
        <a
          className="flex px-2 rounded-r-md hover:bg-indigo-400"
          href={website}
          target="_blank"
        >
          <img src={worldwide} alt="worldwide" className="w-16" />
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
