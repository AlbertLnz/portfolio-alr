import React, { useState } from "react";
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
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold bg-[#010101]">
        Tools
      </h3>
      <div className="flex-grow grid grid-cols-10 rounded-lg h-full bg-[#171719]">
        <div className="col-span-7 mx-3 my-2 rounded-lg">
          {selectedValue === "tools" && (
            <ul className="grid grid-cols-3 place-items-start justify-items-center rounded-lg gap-y-4 py-3">
              <ToolsCardComponent_child
                name="Bootstrap"
                color="bg-[#ffffff]"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
              />
              <ToolsCardComponent_child
                name="Git"
                color="bg-[#ffffff]"
                image="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              />
              <ToolsCardComponent_child
                name="HeidiSQL"
                color="bg-[#ffffff]"
                image="https://upload.wikimedia.org/wikipedia/commons/3/32/HeidiSQL_logo_image.png"
              />
              <ToolsCardComponent_child
                name="Postman"
                color="bg-[#ffffff]"
                image="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png"
              />
              <ToolsCardComponent_child
                name="PHPMyAdmin"
                color="bg-[#ffffff]"
                image="https://upload.wikimedia.org/wikipedia/commons/9/95/PhpMyAdmin_logo.png"
              />
              <ToolsCardComponent_child
                name="MySQL"
                color="bg-[#ffffff]"
                image="https://ucarecdn.com/0295176b-b17a-4106-b3b0-5bf2b14365e6/"
              />
              <ToolsCardComponent_child
                name="MongoDB"
                color="bg-[#ffffff]"
                image="https://toppng.com/uploads/preview/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png"
              />
              <ToolsCardComponent_child
                name="Tailwind"
                color="bg-[#ffffff]"
                image="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
              />
              <ToolsCardComponent_child
                name="VSCode"
                color="bg-[#ffffff]"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
              />
            </ul>
          )}
          {selectedValue === "php" && (
            <div className="mt-4">
              <ToolTechComponent_child
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                name="Laravel"
                website="https://laravel.com/"
              />
            </div>
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
