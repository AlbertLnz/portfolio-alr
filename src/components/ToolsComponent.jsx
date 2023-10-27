const ToolsComponent = () => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold bg-[#010101]">
        Tools
      </h3>
      <div className="flex-grow grid grid-cols-10 rounded-lg bg-[#171719]">
        <div className="col-span-7 mx-3 my-2 rounded-lg bg-black">
          show tools
        </div>
        <div className="col-span-3 flex flex-col mr-3 my-2 rounded-full bg-black">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </div>
    </div>
  );
};

export default ToolsComponent;
