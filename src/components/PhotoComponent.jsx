import photo_cv from "../assets/images/PhotoComponent/photo_cv.png";

const PhotoComponent = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <img
        src={photo_cv}
        alt="photo_cv"
        className="rounded-md object-contain max-w-full max-h-full"
      />
    </div>
  );
};

export default PhotoComponent;
