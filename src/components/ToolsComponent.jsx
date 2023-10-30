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
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold bg-[#010101] h-[12%]">
        Tools
      </h3>
      <div className="grid grid-cols-10 rounded-lg bg-[#171719] h-[88%]">
        <div className="col-span-7 mx-3 my-2 rounded-lg h-fit">
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
            <>
              <div className="mt-2">
                <ToolTechComponent_child
                  image="https://pngimg.com/d/php_PNG26.png"
                  name="PHP"
                  website="https://www.php.net/"
                />
              </div>
              <div className="mt-2">
                <ToolTechComponent_child
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                  name="Laravel"
                  website="https://laravel.com/"
                />
              </div>
              <div className="mt-2">
                <ToolTechComponent_child
                  image="https://cdn.freebiesupply.com/logos/large/2x/codeigniter-logo-png-transparent.png"
                  name="Codeigniter"
                  website="https://codeigniter.com/"
                />
              </div>
              <div className="mt-2">
                <ToolTechComponent_child
                  image="https://cdn.freebiesupply.com/logos/large/2x/symfony-logo-png-transparent.png"
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
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                  name="JavaScript"
                  website="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                />
              </div>
              <div className="mt-2">
                <ToolTechComponent_child
                  image="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                  name="React"
                  website="https://react.dev/"
                />
              </div>
              <div className="mt-2">
                <ToolTechComponent_child
                  image="https://www.iteachrecruiters.com/img/blog/logo/react-native.png  "
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
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png"
                  name="Python"
                  website="https://www.python.org/"
                />
              </div>
              <div className="mt-2">
                <ToolTechComponent_child
                  image="https://seeklogo.com/images/F/fastapi-logo-541BAA112F-seeklogo.com.png"
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
