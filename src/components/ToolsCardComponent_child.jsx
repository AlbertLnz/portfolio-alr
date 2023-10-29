const ToolsCardComponent_child = ({ name, color, image }) => {
  return (
    <li
      className={`flex flex-col items-center justify-between py-1 w-16 h-16 text-xs text-center text-black rounded-md bg-[#212121]`}
    >
      <img src={image} alt={name} className="h-8 w-8" />

      <p className="text-white">{name}</p>
    </li>
  );
};

export default ToolsCardComponent_child;
