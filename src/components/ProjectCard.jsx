import React from "react";

const ProjectCard = ({ project, onClick }) => (
  <div onClick={() => onClick(project)} className="cursor-pointer bg-white shadow-lg rounded p-4 hover:scale-105 transition-transform">
    <img src={project.screenshots[0]} alt={project.title} className="w-full h-40 object-cover rounded"/>
    <h3 className="font-bold text-xl mt-2">{project.title}</h3>
    <p className="text-gray-600">{project.shortDescription}</p>
    <div className="flex flex-wrap gap-1 mt-2">
      {project.techStack.map(tech => (
        <span key={tech} className="text-sm bg-gray-200 px-2 rounded">{tech}</span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
