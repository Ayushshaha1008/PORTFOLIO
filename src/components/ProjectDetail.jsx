import React from "react";

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start p-6 overflow-auto">
      <div className="bg-white rounded p-6 w-full max-w-3xl">
        <button onClick={onClose} className="mb-4 text-red-500 font-bold">Close</button>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="mb-4">{project.shortDescription}</p>
        <h3 className="font-semibold mb-2">Steps:</h3>
        <ol className="list-decimal list-inside mb-4">
          {project.steps.map((step, idx) => <li key={idx}>{step}</li>)}
        </ol>
        <h3 className="font-semibold mb-2">Screenshots:</h3>
        <div className="flex gap-2 overflow-x-auto mb-4">
          {project.screenshots.map((src, idx) => (
            <img key={idx} src={src} alt={project.title} className="w-48 h-32 object-cover rounded"/>
          ))}
        </div>
        {project.documentation && <a href={project.documentation} className="underline text-blue-600" target="_blank" rel="noreferrer">View Documentation</a>}
      </div>
    </div>
  );
};

export default ProjectDetail;
