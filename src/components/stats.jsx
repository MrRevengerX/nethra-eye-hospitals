import React from "react";

function Stats() {
  return (
    <div className="bg-nethraBlue min-h-fit flex items-center justify-center capitalize py-10">
      <div className="flex gap-10 text-center text-white flex-wrap justify-center md:gap-16 lg:gap-60">
        <div>
          <h1 className="text-4xl lg:mb-1">18+</h1>
          <p className="text-xl font-light lg:text-lg lg:font-normal">
            Years of trust
          </p>
        </div>
        <div>
          <h1 className="text-4xl lg:mb-1">12+</h1>
          <p className="text-xl font-light lg:text-lg lg:font-normal">
            expert doctors
          </p>
        </div>
        <div>
          <h1 className="text-4xl lg:mb-1">10,000+</h1>
          <p className="text-xl font-light lg:text-lg lg:font-normal">
            Patients
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
