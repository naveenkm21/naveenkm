
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Reliance ML Project",
      category: "ai-ml",
      description: "Gasifier refractory lifespan prediction using Power BI dashboards and machine learning algorithms for predictive maintenance system.",
      technologies: ["Python", "Power BI", "Machine Learning", "Predictive Analytics"],
      image: "🏭",
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "AICTE Android App",
      category: "mobile",
      description: "Modern Android application built with Jetpack Compose, showcasing optimization techniques and clean architecture patterns.",
      technologies: ["Kotlin", "Jetpack Compose", "Android", "Material Design"],
      image: "📱",
      link: "https://g.dev/naveenkm_srmuniversity"
    },
    {
      id: 3,
      title: "PERSONIFWY AI Tools",
      category: "ai-ml",
      description: "AI-driven tools and applications developed during internship, focusing on machine learning integration and user experience.",
      technologies: ["Python", "AI/ML", "TensorFlow", "API Development"],
      image: "🤖",
      link: "#"
    },
    {
      id: 4,
      title: "React Portfolio Website",
      category: "web",
      description: "Responsive portfolio website built with React and modern web technologies, featuring smooth animations and optimized performance.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      image: "🌐",
      link: "#"
    },
    {
      id: 5,
      title: "AWS Cloud Infrastructure",
      category: "cloud",
      description: "Scalable cloud infrastructure design and implementation using AWS services for high-availability applications.",
      technologies: ["AWS", "EC2", "S3", "Lambda", "CloudFormation"],
      image: "☁️",
      link: "#"
    },
    {
      id: 6,
      title: "Python Data Analytics",
      category: "ai-ml",
      description: "Data analysis and visualization tools built with Python, featuring advanced statistical analysis and reporting capabilities.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
      image: "📊",
      link: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai-ml', name: 'AI/ML' },
    { id: 'web', name: 'Web Dev' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'cloud', name: 'Cloud' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-navy mb-4">My Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-electric mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my latest projects showcasing expertise in full-stack development, 
            cloud solutions, and artificial intelligence applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={`${
                filter === category.id 
                  ? 'bg-gradient-to-r from-purple-600 to-electric text-white' 
                  : 'border-gray-300 text-gray-600 hover:border-purple-600 hover:text-purple-600'
              } transition-all duration-300`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-purple-600 ring-opacity-50' : ''
              }`}
            >
              <CardContent className="p-0">
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-6xl">
                  {project.image}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-navy px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-navy bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                    <Button 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-navy hover:bg-gray-100"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-poppins text-navy mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Interested in working together?</p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-electric text-white hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
