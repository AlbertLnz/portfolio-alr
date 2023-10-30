import cv from "../assets/images/NameComponent/cv.svg";
import discord from "../assets/images/NameComponent/discord.svg";
import github from "../assets/images/NameComponent/github.svg";
import linkedin_icon from "../assets/images/NameComponent/linkedin.svg";
import mail from "../assets/images/NameComponent/mail.svg";

const handleDownload = () => {
  const pdfUrl = "/src/assets/documents/CV - Albert Lanza.pdf";
  window.open(pdfUrl, "_blank");
};

const NameComponent = () => {
  return (
    <div className="h-full flex">
      <div className="flex-grow grid grid-cols-2 grid-rows-1 rounded-lg bg-[#171719]">
        <h3 className="col-span-1 flex self-center justify-center ml-4 text-center pb-1 text-4xl font-extrabold">
          Albert Lanza Rio
        </h3>
        <div className="col-span-1 grid grid-cols-3 m-4">
          <a
            href="https://www.linkedin.com/in/albert-lanza-rio/"
            target="_blank"
            rel="noreferrer"
            className="flex mx-4 my-1 rounded-2xl items-center place-content-center bg-[#0f0f11] hover:bg-[#0a66c2] hover:inner-border-2 hover:inner-border-[#004182]"
          >
            <img
              src={linkedin_icon}
              alt="linkedin_icon"
              className="w-6 rounded-md"
            />
          </a>

          <button
            className="flex mx-4 my-1 rounded-2xl items-center place-content-center bg-[#0f0f11] hover:bg-[#7c878e] hover:inner-border-2 hover:inner-border-[#434b50]"
            onClick={handleDownload}
          >
            <img src={cv} alt="cv" className="w-5 rounded-md" />
          </button>

          <a
            href="mailto: albert.lnz.rio@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex mx-4 my-1 rounded-2xl items-center place-content-center bg-[#0f0f11] hover:bg-[#e84f4b] hover:inner-border-2 hover:inner-border-[#be3b27]"
          >
            <img src={mail} alt="mail" className="w-7 rounded-md" />
          </a>

          <a
            href="https://github.com/AlbertLnz"
            target="_blank"
            rel="noreferrer"
            className="flex mx-4 rounded-2xl items-center place-content-center bg-[#0f0f11] hover:bg-[#f6cd63] hover:inner-border-2 hover:inner-border-[#f1b739]"
          >
            <img src={github} alt="github" className="w-6 rounded-md" />
          </a>

          <a
            href="https://discord.com/users/818193746872762388"
            target="_blank"
            rel="noreferrer"
            className="flex mx-4 rounded-2xl items-center place-content-center bg-[#0f0f11] hover:bg-[#5865f2] hover:inner-border-2 hover:inner-border-[#292841]"
          >
            <img src={discord} alt="discord" className="w-6 rounded-md" />
          </a>

          <button className="bg-[#0f0f11] mx-4 rounded-2xl">6</button>
        </div>
      </div>
    </div>
  );
};

export default NameComponent;
