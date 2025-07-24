import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Hanuma Kopalli</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Passionate .NET Full Stack Developer creating robust, scalable applications 
              that drive business success. Always excited to take on new challenges and 
              deliver exceptional solutions.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and</span>
              <Code size={16} className="text-blue-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-gray-400">
              <li>ASP.NET Core</li>
              <li>C# / .NET 8</li>
              <li>Angular/React / TypeScript</li>
              <li>SQL Server</li>
              <li>MongoDB</li>
              <li>Azure/AWS Cloud</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Hanuma Kopalli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;