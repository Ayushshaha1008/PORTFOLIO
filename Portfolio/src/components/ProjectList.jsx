import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import projectsData from "../data/projects.json";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const localProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects([...projectsData, ...localProjects]);
  }, []);

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">🚀 My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} onClick={() => setSelected(project)} />
        ))}
      </div>

      {selected && (
        <ProjectDetail project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default ProjectList;
