const NameComponent = () => {
  return (
    <div className="h-full flex">
      <div className="flex-grow grid grid-cols-2 grid-rows-1 rounded-lg bg-[#171719]">
        <h3 className="col-span-1 flex self-center justify-center text-center pb-1 text-5xl font-extrabold">
          Albert Lanza
        </h3>
        <div className="col-span-1 grid grid-cols-3 m-4">
          <button className="bg-[#0f0f11] mx-4 mb-1 rounded-lg">1</button>
          <button className="bg-[#0f0f11] mx-4 mb-1 rounded-lg">2</button>
          <button className="bg-[#0f0f11] mx-4 mb-1 rounded-lg">3</button>
          <button className="bg-[#0f0f11] mx-4 rounded-lg">4</button>
          <button className="bg-[#0f0f11] mx-4 rounded-lg">5</button>
          <button className="bg-[#0f0f11] mx-4 rounded-lg">6</button>
        </div>
      </div>
    </div>
  );
};

export default NameComponent;
