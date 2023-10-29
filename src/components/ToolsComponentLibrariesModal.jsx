import React, { useEffect, useState } from "react";

const laravel = ["Laravel Passport", "JWT Token"];

const ToolsComponentLibrariesModal = ({ name, openModal }) => {
  const [showInfoFrom, setShowInfoFrom] = useState([]);

  useEffect(() => {
    document.getElementById("my_modal").showModal();

    name === "Laravel" ? setShowInfoFrom(laravel) : "";
  }, []);

  console.log(showInfoFrom);
  return (
    <div>
      <dialog id="my_modal" className="modal">
        <div className="modal-box text-center bg-[#1d232a]">
          <h3 className="font-bold text-xl pb-4">
            Documentation of <span className="underline">{name}</span> I used
            frequently
          </h3>
          {showInfoFrom.map((item) => (
            <p key={item} className="text-dark py-1">
              {item}
            </p>
          ))}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => openModal(false)}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ToolsComponentLibrariesModal;
