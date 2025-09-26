import React from "react";

const Header = () => (
  <header className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
    <div className="flex items-center gap-4">
      <img src="/profile.jpg" alt="Profile" className="w-20 h-20 rounded-full border-2 border-white"/>
      <div>
        <h1 className="text-3xl font-bold">Ayush Shaha</h1>
        <p>DevOps Engineer | Cloud | CI/CD</p>
      </div>
    </div>
    <div className="flex gap-4">
      <a href="mailto:ayush@example.com" className="underline">Email</a>
      <a href="https://www.linkedin.com/in/ayushshaha/" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
      <a href="https://github.com/ayushshaha1008" target="_blank" rel="noreferrer" className="underline">GitHub</a>
    </div>
  </header>
);

export default Header;
