import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaToolbox } from "react-icons/fa6";
import { SiJavascript, SiPhp, SiPython } from "react-icons/si";

const ToolsNavBarComponent = ({ onSelectedChange }) => {
  const handleOptionSelected = (option) => {
    onSelectedChange(option);
  };

  return (
    <div className="text-slate-100 h-full">
      <SideNav handleOptionSelected={handleOptionSelected} />
    </div>
  );
};

const SideNav = ({ handleOptionSelected }) => {
  const [selected, setSelected] = useState(0);

  const handleItemClick = (option) => {
    handleOptionSelected(option);
  };

  return (
    <nav className="w-full h-full flex flex-col gap-1 place-content-center items-center justify-center">
      <li
        className="list-none text-[#626366] dark:text-white"
        onClick={() => handleItemClick("tools")}
      >
        <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
          <FaToolbox />
        </NavItem>
      </li>
      <li
        className="list-none text-[#626366] dark:text-white"
        onClick={() => handleItemClick("php")}
      >
        <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
          <SiPhp />
        </NavItem>
      </li>
      <li
        className="list-none text-[#626366] dark:text-white"
        onClick={() => handleItemClick("javascript")}
      >
        <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
          <SiJavascript />
        </NavItem>
      </li>
      <li
        className="list-none text-[#626366] dark:text-white"
        onClick={() => handleItemClick("python")}
      >
        <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
          <SiPython />
        </NavItem>
      </li>
    </nav>
  );
};

const NavItem = ({ children, selected, id, setSelected }) => {
  return (
    <motion.button
      className="p-4 text-xl rounded-2xl transition-colors relative"
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="block relative z-10">{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute inset-0 rounded-2xl bg-indigo-200 dark:bg-indigo-600 z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ToolsNavBarComponent;
