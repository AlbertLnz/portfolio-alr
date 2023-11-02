import figma from "../assets/images/PortfolioComponent/figma.svg";
import ipod from "../assets/images/PortfolioComponent/ipod.svg";
import ipod_back from "../assets/images/PortfolioComponent/ipod_back.svg";
import react from "../assets/images/PortfolioComponent/react.svg";

const PortfolioTechUsedComponent = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow rounded-lg bg-[#f6f7f9] dark:bg-[#171719] flex items-center justify-center">
        <div className="relative">
          <label className="swap swap-flip text-9xl">
            <input type="checkbox" />

            <div className="swap-off">
              <button className="text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 flex justify-center items-center rounded-full w-1/3 h-1/3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-player-play-filled"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                    stroke-width="0"
                    fill="#000000"
                  />
                </svg>
              </button>
              <img src={ipod} alt="" className="w-36 z-10" />
            </div>
            <div className="swap-on">
              <img src={ipod_back} alt="" className="w-36" />
              <div className="absolute flex flex-col place-items-center top-1/2 px-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full mt-4">
                <p className="text-[10px] text-center font-bold leading-4 mb-4">
                  Designed & created by Albert Lanza with
                </p>
                <div className="flex gap-4">
                  <div className="tooltip tooltip-bottom" data-tip="Figma">
                    <a
                      href="https://www.figma.com/file/POuUo1v5FZvsOYCkDcD0dt/Portfolio-Albert-Lanza?type=design&node-id=41-292&mode=design&t=vOGdEnfNst7ezMXJ-0"
                      target="_blank"
                    >
                      <img
                        src={figma}
                        alt="figma"
                        className="w-8 cursor-alias"
                      />
                    </a>
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="React">
                    <img src={react} alt="react" className="w-8" />
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTechUsedComponent;
