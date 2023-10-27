const ChallengesComponent = () => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="flex pl-4 text-2xl pb-1 font-extrabold bg-[#010101]">
        Challenging me!
      </h3>
      <div className="flex-grow grid grid-cols-10 grid-rows-6 rounded-lg bg-[#171719]">
        <div className="col-span-10 row-span-1 rounded-t-lg bg-[#5fb299]">
          selecció de techs
        </div>
        <div className="col-span-10 row-span-1 mx-3 my-2 rounded-lg bg-black"></div>
        <div className="col-span-10 row-span-4 mx-3 mb-2 rounded-lg bg-black"></div>
      </div>
    </div>
  );
};

export default ChallengesComponent;
