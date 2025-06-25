import React from 'react';
import { Code, Database, Cloud, Server, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'Go', 'JavaScript/TypeScript', 'SQL', 'Bash'],
      icon: Code
    },
    {
      category: 'Frameworks',
      items: ['Django', 'FastAPI', 'Gin', 'Node.js', 'Express'],
      icon: Server
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MYSQL', 'OracleDB', 'Redis', 'Elasticsearch', 'DynamoDB'],
      icon: Database
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      icon: Cloud
    },
    {
      category: 'Architecture',
      items: ['Microservices', 'RESTful APIs', 'GraphQL', 'Event-Driven', 'CQRS'],
      icon: Zap
    },
    {
      category: 'Security',
      items: ['OAuth2', 'JWT', 'API Gateway', 'Rate Limiting', 'Encryption'],
      icon: Shield
    }
  ];

  const highlights = [
    {
      number: '5+',
      label: 'Years Experience',
      description: 'Building scalable backends'
    },
    {
      number: '50+',
      label: 'APIs Designed',
      description: 'From concept to production'
    },
    {
      number: '99.9%',
      label: 'Uptime Achieved',
      description: 'Reliable system architecture'
    },
    {
      number: '10M+',
      label: 'Requests Handled',
      description: 'High-performance systems'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Backend developer with 5+ years of experience crafting robust, scalable systems that
            power modern applications.
          </p>
        </div>

        {/* Professional Summary */}
        <div className="mb-16">
          <div className="bg-gray-50 dark:bg-dark-700 rounded-2xl p-8 mb-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I specialize in building{' '}
                <strong className="text-primary-400">high-performance backend systems</strong> that
                handle millions of requests with reliability and security as core principles. My
                expertise spans from designing RESTful APIs and microservices architectures to
                implementing robust database solutions and cloud infrastructure.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Throughout my career, I've led backend development for fintech platforms, e-commerce
                solutions, and SaaS applications. I'm passionate about{' '}
                <strong className="text-primary-400">
                  clean code, system design, and performance optimization
                </strong>
                , always seeking to deliver solutions that not only meet current requirements but
                scale for future growth.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                When I'm not architecting backend solutions, you'll find me contributing to
                open-source projects, writing technical articles about system design, or exploring
                the latest developments in cloud-native technologies and distributed systems.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-400 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{highlight.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-400 text-white p-3 rounded-lg mr-4">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
