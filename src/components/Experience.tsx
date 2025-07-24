import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'Hexaware Technologies',
      location: 'Chennai, Tamilnadu',
      period: '2022 - 2024',
      description: 'developing of enterprise-level web applications using Angular,.NET 8 and microservices architecture',
      achievements: [
        'Architected and built 5+ scalable web applications serving 100K+ users',
        'Reduced application load time by 40% through performance optimization',
        'Led migration from .NET Framework to .NET 8, improving deployment efficiency by 60%',
        'Implemented automated testing strategies, achieving 85% code coverage'
      ],
      technologies: ['ASP.NET Core', 'C#', 'Azure', 'Angular', 'SQL Server', 'Docker']
    },
    {
      title: 'Software Engineer',
      company: 'Viaplus By Vinci highways',
      location: 'Hyderabad',
      period: '2024 - Present',
      description: 'Developed and maintained multiple client-facing applications using .NET Core and modern frontend frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Built RESTful APIs serving data to 50+ mobile and web applications',
        'Implemented secure authentication systems using JWT and OAuth 2.0',
        'Optimized database queries resulting in 25% faster response times',
        'Developed responsive web interfaces using React and TypeScript'
      ],
      technologies: ['ASP.NET Core', 'SSIS', 'Angular', 'TypeScript', 'mongoDB']
    },
    // {
    //   title: 'Software Developer',
    //   company: 'StartupXYZ',
    //   location: 'Austin, TX',
    //   period: '2018 - 2020',
    //   description: 'Contributed to the development of a SaaS platform from conception to production. Worked closely with product managers to translate requirements into technical solutions.',
    //   achievements: [
    //     'Developed core features for a multi-tenant SaaS application',
    //     'Implemented real-time features using SignalR for live collaboration',
    //     'Created comprehensive API documentation and developer tools',
    //     'Participated in code reviews and maintained high code quality standards'
    //   ],
    //   technologies: ['ASP.NET Core', 'SignalR', 'Angular', 'SQL Server', 'Azure DevOps', 'Git']
    // }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building robust, scalable applications and leading development teams
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-0.5"></div>

          {experiences.map((experience, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600 mb-2">
                        <span className="font-semibold text-blue-600">{experience.company}</span>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500 text-sm">
                        <Calendar size={14} />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Microsoft Certified: Azure Fundamentals',
                issuer: 'Microsoft',
                year: '2022'
              },
              {
                name: 'Microsoft Certified: Azure Developer Associate',
                issuer: 'Microsoft',
                year: '2023'
              },
              {
                name: 'Microsoft Certified: Azure Data Fundamentals',
                issuer: 'Microsoft',
                year: '2022'
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
                <p className="text-blue-600 text-sm font-medium">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;