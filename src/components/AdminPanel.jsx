import React, { useState } from "react";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    alert("Project added locally. Update projects.json manually to save permanently.");
    console.log({ title, description });
  };

  return (
    <section className="p-6 bg-gray-100 rounded">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border p-2 mb-2 w-full"/>
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="border p-2 mb-2 w-full"/>
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add Project</button>
    </section>
  );
};

export default AdminPanel;
