import React from "react";

const ProjectCard = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer hover:scale-105 transition"
    >
      <h3 className="text-xl font-bold text-neonGreen">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="text-neonBlue mt-3">📂 View Details</p>
    </div>
  );
};

export default ProjectCard;
