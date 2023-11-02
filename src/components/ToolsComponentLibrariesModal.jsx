import React, { useEffect, useState } from "react";

const php = ["1", "2"];
const laravel = ["Laravel Passport", "JWT Token"];
const codeigniter = ["5", "6"];
const symfony = ["hey", "jude"];

const javascript = ["7", "8"];
const react = ["9", "10"];
const react_native = ["11", "12"];

const python = ["13", "14"];
const fastapi = ["15", "16"];

const ToolsComponentLibrariesModal = ({ name, openModal }) => {
  const [showInfoFrom, setShowInfoFrom] = useState([]);

  useEffect(() => {
    document.getElementById("my_modal").showModal();

    name === "PHP" ? setShowInfoFrom(php) : "";
    name === "Laravel" ? setShowInfoFrom(laravel) : "";
    name === "Codeigniter" ? setShowInfoFrom(codeigniter) : "";
    name === "Symfony" ? setShowInfoFrom(symfony) : "";
    name === "JavaScript" ? setShowInfoFrom(javascript) : "";
    name === "React" ? setShowInfoFrom(react) : "";
    name === "React Native" ? setShowInfoFrom(react_native) : "";
    name === "Python" ? setShowInfoFrom(python) : "";
    name === "FastAPI" ? setShowInfoFrom(fastapi) : "";
  }, []);

  console.log(showInfoFrom);
  return (
    <div>
      <dialog id="my_modal" className="modal">
        <div className="modal-box text-center bg-[#ffffff] dark:bg-[#1d232a]">
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
