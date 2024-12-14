import React, { useState } from 'react';

const ExperienceSection = () => {
  const [activeExp, setActiveExp] = useState(1);

  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovators Inc",
      period: "2022 - Present",
      skills: ["React", "TypeScript", "GraphQL", "Redux", "Next.js"],
      achievements: [
        "Led team of 5 developers in building enterprise applications",
        "Improved application performance by 40%",
        "Implemented CI/CD pipelines",
        "Mentored junior developers"
      ],
      tools: ["Git", "JIRA", "Docker", "AWS"],
      location: "San Francisco, CA",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      period: "2020 - 2022",
      skills: ["Node.js", "React", "MongoDB", "Express", "PostgreSQL"],
      achievements: [
        "Developed scalable RESTful APIs",
        "Built real-time chat application",
        "Optimized database performance",
        "Integrated payment gateways"
      ],
      tools: ["GitHub", "Trello", "Jenkins", "Redis"],
      location: "New York, NY",
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Creative Agency",
      period: "2018 - 2020",
      skills: ["JavaScript", "Vue.js", "SASS", "Webpack", "jQuery"],
      achievements: [
        "Created responsive web applications",
        "Improved site load time by 60%",
        "Implemented UI/UX designs",
        "Developed reusable components"
      ],
      tools: ["Bitbucket", "Figma", "Adobe XD", "Gulp"],
      location: "Boston, MA",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-syncopate mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 animate-gradient">
            Experience
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-8"></div>
      </div>

      {/* Timeline Navigation */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex justify-center items-center space-x-8">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveExp(exp.id)}
              className={`relative px-6 py-3 rounded-xl transition-all duration-300 ${
                activeExp === exp.id 
                  ? 'bg-purple-900/30 text-white scale-110'
                  : 'text-purple-300/60 hover:text-purple-300'
              }`}
            >
              <span className="relative z-10 font-medium">{exp.period}</span>
              {activeExp === exp.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl blur"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Content */}
      <div className="container mx-auto px-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`transform transition-all duration-500 ${
              activeExp === exp.id 
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8 hidden'
            }`}
          >
            <div className="max-w-4xl mx-auto">
              {/* Header Card */}
              <div className="bg-purple-900/30 rounded-2xl p-8 mb-8 backdrop-blur-sm border border-purple-500/10">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-purple-300">{exp.company}</p>
                    <p className="text-purple-400/80">{exp.location}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {[1,2,3].map((dot) => (
                      <div 
                        key={dot}
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} animate-pulse`}
                        style={{ animationDelay: `${dot * 200}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Achievements */}
                <div className="bg-purple-900/20 rounded-xl p-6 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                      🎯
                    </span>
                    Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li 
                        key={i}
                        className="flex items-start text-purple-200/70 hover:text-purple-200 transition-colors"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills & Tools */}
                <div className="space-y-8">
                  {/* Skills */}
                  <div className="bg-purple-900/20 rounded-xl p-6 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                        💻
                      </span>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-all duration-300 animate-fadeIn"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="bg-purple-900/20 rounded-xl p-6 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                        🛠️
                      </span>
                      Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, i) => (
                        <span
                          key={tool}
                          className="px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition-all duration-300 animate-fadeIn"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default ExperienceSection; 