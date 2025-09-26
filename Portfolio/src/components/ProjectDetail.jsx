import React from "react";

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-start overflow-y-auto p-10">
      <div className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-400 font-bold"
        >
          ❌
        </button>

        <h2 className="text-3xl font-bold text-neonGreen">{project.title}</h2>
        <p className="mt-2 text-gray-300">{project.description}</p>

        <h3 className="mt-6 text-2xl text-neonBlue">Steps</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          {project.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        <h3 className="mt-6 text-2xl text-neonBlue">Screenshots</h3>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {project.screenshots.map((src, i) => (
            <img key={i} src={src} alt="screenshot" className="rounded-lg" />
          ))}
        </div>

        {project.documentation && (
          <a
            href={project.documentation}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-neonGreen underline"
          >
            📄 Read Documentation
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
