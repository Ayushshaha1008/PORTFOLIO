import React, { useState } from "react";

const AdminPanel = () => {
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem("projects")) || []);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    steps: "",
    screenshots: "",
    documentation: ""
  });

  const handleAdd = () => {
    const projectObj = {
      title: newProject.title,
      description: newProject.description,
      steps: newProject.steps.split("\n"),
      screenshots: newProject.screenshots.split(",").map(s => s.trim()),
      documentation: newProject.documentation
    };

    const updated = [...projects, projectObj];
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
    setNewProject({ title: "", description: "", steps: "", screenshots: "", documentation: "" });
    alert("✅ Project added locally (only you can see it now)");
  };

  return (
    <div className="mt-6 p-6 border rounded bg-gray-100 text-black max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">🔒 Admin Panel</h2>
      <input
        type="text"
        placeholder="Title"
        value={newProject.title}
        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        className="border p-2 m-1 w-full"
      />
      <textarea
        placeholder="Description"
        value={newProject.description}
        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        className="border p-2 m-1 w-full h-16"
      />
      <textarea
        placeholder="Steps (one per line)"
        value={newProject.steps}
        onChange={(e) => setNewProject({ ...newProject, steps: e.target.value })}
        className="border p-2 m-1 w-full h-24"
      />
      <input
        type="text"
        placeholder="Screenshots (comma separated URLs)"
        value={newProject.screenshots}
        onChange={(e) => setNewProject({ ...newProject, screenshots: e.target.value })}
        className="border p-2 m-1 w-full"
      />
      <input
        type="text"
        placeholder="Documentation Link"
        value={newProject.documentation}
        onChange={(e) => setNewProject({ ...newProject, documentation: e.target.value })}
        className="border p-2 m-1 w-full"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
        ➕ Add Project
      </button>
    </div>
  );
};

export default AdminPanel;
