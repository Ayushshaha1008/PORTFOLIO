import React from "react";

const About = () => {
  const skills = ["Docker", "Kubernetes", "Terraform", "AWS", "Jenkins", "Git", "CI/CD"];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        I am a passionate DevOps Engineer with hands-on experience in cloud technologies,
        containerization, CI/CD pipelines, and automation.
      </p>
      <h3 className="text-xl font-semibold mb-2">Key Skills</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <li key={skill} className="bg-blue-500 text-white px-3 py-1 rounded">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default About;
