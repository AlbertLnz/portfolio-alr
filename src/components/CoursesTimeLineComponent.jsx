import React, { useEffect, useState } from "react";

const CoursesTimeLineComponent = ({ position, setColor }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const circles = [
    { id: 1, active: currentStep === 1, color: "bg-green-300" },
    { id: 2, active: currentStep === 2, color: "bg-yellow-200" },
    { id: 3, active: currentStep === 3, color: "bg-green-300" },
    { id: 4, active: currentStep === 4, color: "bg-yellow-200" },
    { id: 5, active: currentStep === 5, color: "bg-blue-400" },
    { id: 6, active: currentStep === 6, color: "bg-blue-400" },
    { id: 7, active: currentStep === 7, color: "bg-yellow-200" },
    { id: 8, active: currentStep === 8, color: "bg-yellow-200" },
    { id: 9, active: currentStep === 9, color: "bg-yellow-200" },
    { id: 10, active: currentStep === 10, color: "bg-blue-400" },
    { id: 11, active: currentStep === 11, color: "bg-yellow-200" },
    { id: 12, active: currentStep === 12, color: "bg-yellow-200" },
  ];

  useEffect(() => {
    setCurrentStep(position);
    setColor(circles[position - 1].color);
  }, [position]);

  return (
    <div className="container flex flex-col items-center justify-center mx-2 w-full h-6">
      <div className="steps flex w-full items-center justify-between relative">
        {circles.map((circle) => (
          <span
            key={circle.id}
            className={`z-10 rounded-full w-6 h-6 text-xs flex justify-center items-center text-black ${
              circle.color
            } ${circle.active ? "active font-bold" : ""}`}
          >
            {circle.id}
          </span>
        ))}

        <div className="flex items-center absolute h-6 w-full z-0">
          <span
            className="absolute h-1/2 bg-[#2b3037] rounded-full px-1 transition-all duration-500"
            style={{
              width: `${((currentStep - 1) / (circles.length - 1)) * 100}%`,
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default CoursesTimeLineComponent;
