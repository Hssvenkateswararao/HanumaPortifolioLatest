import { ExternalLink, Code, Database, Globe, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with .NET 8 and React. Features include user authentication, payment processing, inventory management, and real-time notifications.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['ASP.NET Core', 'Entity Framework', 'React', 'TypeScript', 'SQL Server', 'Stripe API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for project management with advanced features like role-based access control, real-time updates, and comprehensive reporting.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['ASP.NET Core', 'Clean Architecture', 'CQRS', 'SignalR', 'JWT', 'Swagger'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Financial Dashboard',
      description: 'Real-time financial analytics dashboard with complex data visualization, automated reporting, and multi-tenant architecture.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Blazor Server', 'Chart.js', 'Entity Framework', 'Azure SQL', 'Redis', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and secure messaging between providers.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['ASP.NET Core MVC', 'Identity Server', 'PostgreSQL', 'Angular', 'Azure', 'HIPAA Compliant'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0], index: number }) => (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
      project.featured ? 'lg:col-span-2' : ''
    }`}>
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={project.liveUrl}
            className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors duration-200"
          >
            <ExternalLink size={16} />
          </a>
          <a 
            href={project.githubUrl}
            className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors duration-200"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Code size={16} />
              <span>Full Stack</span>
            </div>
            <div className="flex items-center space-x-1">
              <Database size={16} />
              <span>Database</span>
            </div>
            <div className="flex items-center space-x-1">
              <Globe size={16} />
              <span>Web App</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of production-ready applications built with modern .NET technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
{/* 
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;