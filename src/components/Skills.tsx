import { Code, Database, Globe, Cpu, Shield, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <Code className="w-8 h-8" />,
      skills: ['C# , .NET Core', 'ASP.NET Core', 'Web API', 'Entity Framework Core', 'LINQ', 'Dependency Injection'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Database Technologies',
      icon: <Database className="w-8 h-8" />,
      skills: ['SQL Server', 'Redis', 'MongoDB'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Frontend Development',
      icon: <Globe className="w-8 h-8" />,
      skills: ['Angular', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS', 'Blazor', 'JavaScript ES6+','Razor Pages'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Architecture & Patterns',
      icon: <Cpu className="w-8 h-8" />,
      skills: ['Clean Architecture', 'CQRS', 'Repository Pattern', 'Microservices', 'Domain-Driven Design', 'SOLID Principles'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Security & Testing',
      icon: <Shield className="w-8 h-8" />,
      skills: ['JWT Authentication', 'OAuth 2.0', 'Unit Testing', 'Integration Testing', 'xUnit', 'Moq'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-8 h-8" />,
      skills: ['Azure', 'Docker', 'CI/CD', 'Git', 'Azure DevOps', 'IIS','AWS'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in modern .NET development stack and related technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center space-x-3">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Proficiencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'C# / .NET Core', level: 95 },
              { name: 'ASP.NET Core Web API', level: 90 },
              { name: 'Entity Framework Core', level: 88 },
              { name: 'SQL Server', level: 85 },
              { name: 'React/Angular/ TypeScript', level: 82 },
              { name: 'Azure Cloud Services', level: 78 },
              {name:'AWS',level:70}
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-teal-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;