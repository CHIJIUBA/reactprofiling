import React from 'react';
import { Terminal, Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-primary-400 text-white">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white font-mono">
                dev.portfolio
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              Backend Developer specializing in scalable systems, API design, and cloud
              architecture. Building the infrastructure that powers modern applications.
            </p>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and</span>
              <Code className="w-4 h-4 text-primary-400" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-yellow-600" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Python & Go</li>
              <li>FastAPI & Django</li>
              <li>PostgreSQL & Redis</li>
              <li>Docker & Kubernetes</li>
              <li>AWS & GCP</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 sm:mb-0">
              © {currentYear} Backend Developer Portfolio. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
