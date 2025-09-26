import React from "react";
import ProjectList from "./components/ProjectList";
import AdminPanel from "./components/AdminPanel";

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const isAdmin = urlParams.get("admin") === "true"; // hidden admin mode

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold text-neonGreen">🚀 Ayush's DevOps Portfolio</h1>
        <p className="text-neonBlue mt-2">Cloud | Automation | Scaling</p>
      </header>

      <ProjectList />

      {isAdmin && <AdminPanel />}

      <footer className="py-6 text-center border-t border-gray-700 mt-10 text-gray-400">
        © 2025 Ayush Shaha | Built with ❤️ & DevOps ⚡
      </footer>
    </div>
  );
};

export default App;
