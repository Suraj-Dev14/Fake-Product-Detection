import React from "react";

const StepCard = ({ step, title, description }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
        {step}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
};

export default StepCard;