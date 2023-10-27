const CoursesComponent = () => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="flex pl-4 text-2xl py-2 font-extrabold bg-[#010101]">
        Courses
      </h3>
      <div className="flex-grow grid grid-cols-10 rounded-lg bg-[#171719]">
        <div className="col-span-2 mx-3 my-2 rounded-lg bg-black">nav</div>
        <div className="col-span-8 mr-3 my-2 rounded-lg bg-black">courses</div>
      </div>
    </div>
  );
};

export default CoursesComponent;
