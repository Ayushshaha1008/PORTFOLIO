import React, { useState } from "react";
import projectsData from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
        ))}
      </div>
      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default ProjectList;
