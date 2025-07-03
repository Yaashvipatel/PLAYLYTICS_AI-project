import React from "react";
import "./App.css";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-purple-100 via-white to-cyan-100 min-h-screen">
      {/* Banner + Profile Image */}
      <header className="relative w-full h-64 bg-gray-300">
        <img
          src="/banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
          <img
            src="/yaashi.jpg"
            alt="Yaashvi Patel"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Name & Role */}
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-gray-800">Yaashvi Patel</h1>
        <p className="text-lg text-gray-600">Developer | Innovator | Learner</p>
      </div>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 underline">About Me</h2>
        <p className="text-gray-700 leading-7">
          I’m <strong>Yaashvi Patel</strong>, a Computer Science Engineering student currently in my
          <strong> 2nd year</strong> at <strong>Graphic Era Deemed To Be University, Dehradun</strong>. I’m based in
          <strong> India</strong> and passionate about building meaningful tech solutions using AI, full-stack
          development, and clean UI design.
        </p>
        <p className="mt-4 text-gray-700 leading-7">
          I enjoy transforming ideas into interactive, real-world projects — from algorithm visualization to AI
          dashboards. I’m continuously expanding my skills in React, Node.js, MongoDB, and machine learning, and love
          participating in hackathons, internships, and team projects.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 underline">Projects</h2>

        {[
          {
            title: "Playlytics AI",
            desc: "A full-stack AI-powered sports performance analysis platform with visual dashboards, dynamic filters, and AI-generated insights.",
            link: "https://github.com/Yaashvipatel/PLAYLYTICS_AI-project",
          },
          {
            title: "Bellman-Ford Network Optimization",
            desc: "A real-time packet routing simulator visualizing the Bellman-Ford algorithm using React, Cytoscape.js, and WebSockets.",
            link: "https://github.com/Yaashvipatel/bellman-ford-network-optimisation-project",
          },
          {
            title: "ML Waste Segregation Platform",
            desc: "An ML-based system classifying waste images (plastic, glass, metal, organic) using Python, scikit-learn, and OpenCV.",
            link: "https://github.com/Yaashvipatel/ml-waste-segmentation",
          },
        ].map((project) => (
          <div key={project.title} className="bg-white p-5 rounded-lg shadow mb-6">
            <h3 className="text-xl font-bold text-purple-700">{project.title}</h3>
            <p className="mt-2 text-gray-700">{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 underline">Tech Stack & Skills</h2>
        <p className="text-gray-700">
          <strong>Languages:</strong> JavaScript, Python, Java, C++, C, SQL <br />
          <strong>Frontend:</strong> React.js, HTML, CSS <br />
          <strong>Backend:</strong> Node.js, Express.js <br />
          <strong>Database:</strong> MongoDB, PostgreSQL <br />
          <strong>Tools:</strong> Git, GitHub, VS Code <br />
          <strong>Cloud & Deployment:</strong> GitHub Pages
        </p>
      </section>

      {/* LEADERSHIP */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 underline">Leadership & Soft Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>🧠 Discipline Committee Member – Freshers' Event</li>
          <li>⚽ Girls’ Sports Captain – School Leadership Role</li>
          <li>🎭 Passionate about dance and sports</li>
        </ul>
      </section>

      {/* PROFILES */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 underline">Online Profiles</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-blue-700">
            <FaLinkedin />{" "}
            <a href="https://linkedin.com/in/yaashvi-patel-192958276" target="_blank" rel="noreferrer">
              yaashvi-patel
            </a>
          </li>
          <li className="flex items-center gap-2 text-blue-700">
            <FaGithub />{" "}
            <a href="https://github.com/Yaashvipatel" target="_blank" rel="noreferrer">
              Yaashvipatel
            </a>
          </li>
          <li className="flex items-center gap-2 text-blue-700">
            <FaCode />{" "}
            <a href="https://leetcode.com/u/yaashvipatel" target="_blank" rel="noreferrer">
              yaashvipatel
            </a>
          </li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 underline">Contact</h2>
        <p className="text-gray-700">📧 Email: yaashvipatel@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
