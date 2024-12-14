import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiCodepen, FiInstagram, FiDollarSign, FiMenu, FiX } from 'react-icons/fi';
import './index.css';
import sketchBoard from './jpg/drawshear.png';
import qkart from './jpg/qkart.png';
import qtify from './jpg/Qtify.png';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Add scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Navigation items
  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const socialLinks = [
    { icon: <FiGithub size={22} />, url: 'https://github.com/MayurCode2' },
    { icon: <FiLinkedin size={22} />, url: 'https://www.linkedin.com/in/mayur-patil2205/' },
    { icon: <FiCodepen size={22} />, url: 'https://codepen.io' },
    { icon: <FiInstagram size={22} />, url: 'https://instagram.com' },
    { icon: <FiDollarSign size={22} />, url: '#' }
  ];

  const experiences = [
    {
      period: "MAY 2024 — PRESENT",
      title: "Full-stack Developer",
      company: "Finhaat Insurance Broking Pvt Ltd",
      link: "https://finhaat.com",
      description: "Led frontend development of a comprehensive insurance platform, implementing key features and systems that significantly improved operational efficiency. Developed a document verification portal and business tracking system, built a mutual funds and digital gold platform, and implemented a multi-role permission system.",
      skills: [
        'React.js',
        'Node.js',
        'SQL',
        'REST API',
        'Authentication',
        'Material UI',
        'Redux'
      ]
    },
    {
      period: "JUN 2023 — DEC 2023",
      title: "Frontend Developer",
      company: "Blue9 Technologies",
      link: "#",
      description: "Developed and maintained e-commerce applications using React Native and NativeWind, focusing on creating responsive and user-friendly mobile interfaces. Implemented modern UI components and optimized app performance for both iOS and Android platforms.",
      skills: [
        'React Native',
        'NativeWind',
        'JavaScript',
        'Mobile Development',
        'E-commerce',
        'UI/UX',
        'Cross-platform Development'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1221] text-[#8892B0] relative overflow-hidden">
      {/* Background blur effect */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.1), transparent 40%)`,
          zIndex: 1,
        }}
      />
      
      {/* Content wrapper with higher z-index */}
      <div className="relative z-10">
        {/* Left Sidebar - Desktop */}
        <div className="hidden md:fixed md:block top-0 left-0 w-[400px] h-screen pt-24 px-8 ml-[300px]">
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] mb-2">
                Mayur Patil
              </h1>
              <h2 className="text-lg md:text-xl text-[#8892B0] mb-6">
                Full Stack Developer
              </h2>
              <p className="text-[#8892B0] leading-relaxed">
                I build accessible, pixel-perfect digital experiences for the web.
              </p>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-[#64FFDA] bg-[#172A45]/50 translate-x-2'
                      : 'text-[#8892B0] hover:text-[#64FFDA] hover:translate-x-2'
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#64FFDA]"></span>
                    )}
                  </span>
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex mt-56 gap-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:ml-[600px] min-h-screen">
          <div className="max-w-3xl mx-auto px-4 md:px-8 pt-20 md:pt-24">
            <section id="about" className="min-h-screen py-16 md:py-24">
              <AboutSection />
            </section>

            <section id="experience" className="min-h-screen py-16 md:py-24">
              <ExperienceSection experiences={experiences} />
            </section>

            <section id="projects" className="min-h-screen py-16 md:py-24">
              <ProjectsSection />
            </section>

            <section id="contact" className="min-h-screen py-16 md:py-24">
              <ContactSection />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

// Create separate components for each section
function AboutSection() {
  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'Next.js',
    'SQL',
    'Docker',
    'TypeScript',
    'Express.js',
    'MongoDB',
    'REST APIs',
    'Git',
    'Tailwind CSS'
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <p className="text-[#8892B0] leading-relaxed">
          I'm a Full Stack Developer with a passion for building exceptional digital experiences. 
          I specialize in creating responsive web applications that combine clean code with 
          intuitive user interfaces.
        </p>
        <p className="text-[#8892B0] leading-relaxed">
          Currently, I'm working as a Full Stack Developer at{' '}
          <a href="https://finhaat.com" className="text-[#64FFDA] hover:text-[#64FFDA]/80">
            Finhaat Insurance Broking Pvt Ltd
          </a>
          , where I develop and maintain insurance platforms, document verification systems, 
          and financial technology solutions.
        </p>
        <p className="text-[#8892B0] leading-relaxed">
          My experience spans across various domains, from{' '}
          <span className="text-[#64FFDA]">e-commerce platforms</span> to{' '}
          <span className="text-[#64FFDA]">fintech solutions</span>. I've worked on projects 
          involving real-time collaboration, payment systems, and user authentication. I'm 
          particularly interested in building scalable applications that solve real-world problems.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-[#CCD6F6] text-lg">Here are some technologies I work with:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 text-[#8892B0]">
              <span className="text-[#64FFDA]">▹</span> {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceSection({ experiences }) {
  return (
    <div className="space-y-16">
      {experiences.map((exp, index) => (
        <div key={index} className="group">
          <div className="block space-y-4 p-8 rounded-lg hover:bg-[#172A45]/50 transition-colors">
            <div className="flex flex-col md:flex-row md:gap-12">
              <div className="text-[#8892B0] text-sm md:w-28 flex-shrink-0 opacity-60 mb-4 md:mb-0">
                {exp.period}
              </div>
              <div className="space-y-4">
                <h3 className="text-lg text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors flex items-center gap-2">
                  {exp.title}{' '}
                  <a 
                    href={exp.link}
                    className="text-[#64FFDA] hover:text-[#64FFDA]/80 inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @ {exp.company} <span className="ml-1">↗</span>
                  </a>
                </h3>
                
                {exp.roles && (
                  <div className="space-y-1 text-[#8892B0] opacity-60">
                    {exp.roles.map((role, idx) => (
                      <div key={idx}>{role}</div>
                    ))}
                  </div>
                )}

                <p className="text-[#8892B0] leading-relaxed max-w-2xl opacity-60">
                  {exp.description}
                </p>

                {exp.links && (
                  <div className="flex gap-6">
                    {exp.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        className="text-[#8892B0] hover:text-[#64FFDA] transition-colors text-sm opacity-60"
                      >
                        ↗ {link.text}
                      </a>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs rounded bg-[#172A45]/50 text-[#64FFDA] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Sketch Board",
      description: "Real-Time Collaborative Sketch Board web app for live collaborative sketching and sharing with multiple users. Features include real-time drawing synchronization, multiple user collaboration, and instant sharing capabilities.",
      image: sketchBoard,
      link: "https://draw-share.vercel.app/",
      github: "https://github.com/MayurCode2/DrawShare",
      skills: ["Next.js", "Canvas", "Socket.io", "Node.js", "Express", "CORS"]
    },
    {
      title: "Qkart",
      description: "QKart is an e-commerce application offering a variety of products for customers to choose from. Implemented features include product browsing, cart management, user authentication, and secure checkout process.",
      image: qkart,
      link: "https://shopping-qkart-app.netlify.app",
      github: "https://github.com/MayurCode2/Qkart-shopping-app",
      skills: ["React", "Material UI", "Node.js", "Express", "MongoDB", "Debouncing"]
    },
    {
      title: "Qtify",
      description: "Qtify is a powerful and intuitive music streaming application, designed to provide an exceptional listening experience for music enthusiasts. Features modern UI design and responsive layouts.",
      image: qtify,
      link: "https://qtifymayur.netlify.app",
      github: "https://github.com/MayurCode2/Qtify",
      skills: ["React", "Tailwind CSS", "Flexbox"]
    }
  ];

  return (
    <div className="space-y-16">
      {projects.map((project, index) => (
        <div key={index} className="group">
          <div className="block space-y-4 p-8 rounded-lg hover:bg-[#172A45]/50 transition-colors">
            {/* Project Header */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-12 bg-[#172A45] rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-4">
                <h3 className="text-lg text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.link && project.link !== "#" && (
                    <a 
                      href={project.link}
                      className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Project Description */}
            <p className="text-[#8892B0] leading-relaxed opacity-60">
              {project.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 text-xs rounded bg-[#172A45]/50 text-[#64FFDA] font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* View Full Archive Link */}
      <div className="pt-8">
        <a 
          href="#"
          className="inline-flex items-center text-[#64FFDA] hover:text-[#64FFDA]/80 transition-colors"
        >
          View Full Project Archive <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="space-y-8 text-center">
      <h2 className="text-4xl font-bold text-[#CCD6F6]">Get In Touch</h2>
      <p className="text-[#8892B0] leading-relaxed max-w-xl mx-auto">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
        I'll try my best to get back to you!
      </p>
      
      <div className="space-y-6">
        <a 
          href="mailto:mpmayur2251998@gmail.com"
          className="inline-block px-8 py-4 border-2 border-[#64FFDA] text-[#64FFDA] rounded-lg
                   hover:bg-[#64FFDA]/10 transition-colors"
        >
          Say Hello
        </a>

        <div className="pt-12 space-y-4">
          <p className="text-[#8892B0]">You can also find me on these platforms:</p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/MayurCode2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mayur-patil2205/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
            <a 
              href="mailto:mpmayur2251998@gmail.com"
              className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-16">
          <p className="text-sm text-[#8892B0] opacity-60">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
