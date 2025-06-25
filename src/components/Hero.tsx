import React from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, Code, Database, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techIcons = [
    { icon: Code, label: 'APIs' },
    { icon: Database, label: 'Databases' },
    { icon: Cloud, label: 'Cloud' }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Animated Tech Icons */}
          <div className="flex justify-center space-x-8 mb-8 opacity-60">
            {techIcons.map((tech, index) => (
              <div
                key={tech.label}
                className="animate-bounce-slow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <tech.icon className="w-8 h-8 text-primary-400" />
              </div>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Frontend Developer
            <span className="block text-primary-400 font-mono">
              | API Architect | Cloud Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            I build{' '}
            <span className="text-primary-400 font-semibold">scalable, secure backend systems</span>{' '}
            with Python, Node, and AWS. Transforming complex business requirements into elegant API
            solutions.
          </p>

          {/* Terminal-style Code */}
          <div className="bg-dark-800 dark:bg-dark-900 rounded-lg p-4 mb-8 max-w-2xl mx-auto border border-gray-200 dark:border-dark-700 animate-slide-up">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <code className="text-green-400 font-mono text-sm block">
              <span className="text-blue-400">$</span> whoami
              <br />
              <span className="text-white">backend_developer</span>
              <br />
              <span className="text-blue-400">$</span> echo $EXPERTISE
              <br />
              <span className="text-white">
                ["Python", "Go", "AWS", "PostgreSQL", "Docker", "Kubernetes"]
              </span>
            </code>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <button
              onClick={() => scrollToSection('#projects')}
              className="bg-primary-400 hover:bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              download
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            <a
              href="https://github.com"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('#about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-400 transition-colors duration-200 animate-bounce"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
