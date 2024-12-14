import React, { useState } from 'react';

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory and payments",
      image: "https://via.placeholder.com/600x400",
      tech: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "Analytics dashboard with machine learning insights and visualizations",
      image: "https://via.placeholder.com/600x400",
      tech: ["Python", "React", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Real-time social platform with messaging and content sharing",
      image: "https://via.placeholder.com/600x400",
      tech: ["Next.js", "Socket.io", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Section Title */}
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-syncopate mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Featured
          </span>
          <span className="text-white"> Projects</span>
        </h2>
        <p className="text-purple-300/80 text-lg max-w-2xl">
          Explore my latest work
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative bg-purple-900/10 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 hover:translate-y-[-5px]">
                {/* Project Image */}
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] to-transparent opacity-80"></div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-purple-200/70 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-purple-500/10">
                    <a
                      href={project.liveUrl}
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Live Demo →
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Source Code →
                    </a>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:opacity-90 transition-all duration-300 group">
            View All Projects
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
    </section>
  );
};

export default ProjectSection; 