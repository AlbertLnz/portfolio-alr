import photo_cv from "../assets/images/PhotoComponent/photo_cv.png";

const PhotoComponent = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow flex rounded-lg items-center place-content-center bg-[#171719]">
        <div className="w-1/3 h-full flex items-center">
          <img
            src={photo_cv}
            alt="photo_cv"
            className="mx-auto rounded-md border-4 border-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoComponent;
