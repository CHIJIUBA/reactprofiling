import React, { useState } from 'react';
import { ExternalLink, Github, Database, Cloud, Zap, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Microservices Platform',
      description:
        'Scalable microservices architecture handling 10M+ requests daily with real-time inventory management and payment processing.',
      image:
        'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      category: 'APIs',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      highlights: ['99.9% uptime', 'Sub-200ms response time', 'Horizontal scaling']
    },
    {
      id: 2,
      title: 'Real-time Analytics Engine',
      description:
        'Event-driven data processing pipeline with real-time dashboards and automated alerting system.',
      image:
        'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Go', 'Apache Kafka', 'ClickHouse', 'Elasticsearch', 'Kubernetes'],
      category: 'Databases',
      github: 'https://github.com',
      highlights: ['1M+ events/sec', 'Real-time processing', 'Auto-scaling']
    },
    {
      id: 3,
      title: 'Multi-tenant SaaS Backend',
      description:
        'Secure multi-tenant architecture with role-based access control and comprehensive API documentation.',
      image:
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Docker'],
      category: 'APIs',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      highlights: ['Multi-tenancy', 'RBAC', 'API documentation']
    },
    {
      id: 4,
      title: 'Serverless Image Processing',
      description:
        'AWS Lambda-based image processing service with automatic scaling and cost optimization.',
      image:
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'AWS Lambda', 'S3', 'DynamoDB', 'CloudFront', 'Terraform'],
      category: 'Cloud',
      github: 'https://github.com',
      highlights: ['Serverless', 'Auto-scaling', 'Cost-optimized']
    },
    {
      id: 5,
      title: 'Blockchain Transaction API',
      description:
        'High-performance blockchain transaction processing with wallet management and smart contract integration.',
      image:
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Go', 'PostgreSQL', 'Redis', 'Docker', 'Web3', 'Prometheus'],
      category: 'APIs',
      github: 'https://github.com',
      highlights: ['Blockchain integration', 'High throughput', 'Secure wallets']
    },
    {
      id: 6,
      title: 'Database Optimization Suite',
      description:
        'Performance monitoring and optimization tools for PostgreSQL with automated query analysis.',
      image:
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'PostgreSQL', 'Grafana', 'Prometheus', 'Docker'],
      category: 'Databases',
      github: 'https://github.com',
      highlights: ['Query optimization', 'Performance monitoring', 'Automated alerts']
    }
  ];

  const categories = ['All', 'APIs', 'Cloud', 'Databases'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'APIs':
        return Code;
      case 'Cloud':
        return Cloud;
      case 'Databases':
        return Database;
      default:
        return Zap;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of backend systems and APIs I've architected and developed, showcasing
            scalability, performance, and security.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category);
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-primary-400 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-dark-700 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
