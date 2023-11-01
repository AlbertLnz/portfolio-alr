import React, { useState } from "react";
import toolsImages from "../services/ToolsImages";
import toolsTechImages from "../services/ToolsTechImages";
import ToolTechComponent_child from "./ToolTechComponent_child";
import ToolsCardComponent_child from "./ToolsCardComponent_child";
import IconSideNav from "./ToolsNavBarComponent";

const ToolsComponent = () => {
  const [selectedValue, setSelectedValue] = useState("tools");

  const handleSelectedChange = (selected) => {
    setSelectedValue(selected);
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold bg-[#010101] h-[12%]">
        Tools
      </h3>
      <div className="grid grid-cols-10 rounded-lg bg-[#171719] h-[88%]">
        <div className="col-span-7 mx-3 my-2 rounded-lg h-fit">
          {selectedValue === "tools" && (
            <ul className="grid grid-cols-3 place-items-start justify-items-center rounded-lg gap-y-4 py-3">
              <ToolsCardComponent_child
                name="Bootstrap"
                image={toolsImages[0]}
              />
              <ToolsCardComponent_child name="Git" image={toolsImages[1]} />
              <ToolsCardComponent_child
                name="HeidiSQL"
                image={toolsImages[2]}
              />
              <ToolsCardComponent_child name="Postman" image={toolsImages[3]} />
              <ToolsCardComponent_child
                name="PHPMyAdmin"
                image={toolsImages[4]}
              />
              <ToolsCardComponent_child name="MySQL" image={toolsImages[5]} />
              <ToolsCardComponent_child name="MongoDB" image={toolsImages[6]} />
              <ToolsCardComponent_child
                name="Tailwind"
                image={toolsImages[7]}
              />
              <ToolsCardComponent_child name="VSCode" image={toolsImages[8]} />
            </ul>
          )}
          {selectedValue === "php" && (
            <>
              <div className="mt-2">
                <ToolTechComponent_child
                  image={toolsTechImages[0]}
                  name="PHP"
                  website="https://www.php.net/"
                />
              </div>
              <div className="mt-2">
                <ToolTechComponent_child
                  image={toolsTechImages[1]}
                  name="Laravel"
                  website="https://laravel.com/"
                />
              </div>
              <div className="mt-2">
                <ToolTechComponent_child
                  image={toolsTechImages[2]}
                  name="Codeigniter"
                  website="https://codeigniter.com/"
                />
              </div>
              <div className="mt-2">
                <ToolTechComponent_child
                  image={toolsTechImages[3]}
                  name="Symfony"
                  website="https://symfony.com/"
                />
              </div>
            </>
          )}
          {selectedValue === "javascript" && (
            <>
              <div className="mt-2">
                <ToolTechComponent_child
                  image={toolsTechImages[4]}
                  name="JavaScript"
                  website="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                />
              </div>
              <div className="mt-2">
                <ToolTechComponent_child
                  image={toolsTechImages[5]}
                  name="React"
                  website="https://react.dev/"
                />
              </div>
              <div className="mt-2">
                <ToolTechComponent_child
                  image={toolsTechImages[6]}
                  name="React Native"
                  website="https://reactnative.dev/"
                />
              </div>
            </>
          )}
          {selectedValue === "python" && (
            <>
              <div className="mt-2">
                <ToolTechComponent_child
                  image={toolsTechImages[7]}
                  name="Python"
                  website="https://www.python.org/"
                />
              </div>
              <div className="mt-2">
                <ToolTechComponent_child
                  image={toolsTechImages[8]}
                  name="FastAPI"
                  website="https://fastapi.tiangolo.com/"
                />
              </div>
            </>
          )}
        </div>
        <div className="col-span-3 mr-3 my-2 rounded-2xl bg-black">
          <IconSideNav onSelectedChange={handleSelectedChange} />
        </div>
      </div>
    </div>
  );
};

export default ToolsComponent;
