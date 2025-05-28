
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ExternalLink, Star, Code, Smartphone, Cloud, Brain, Github } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  // Real pinned repositories from https://github.com/naveenkm21
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "web",
      description: "Modern, responsive portfolio website built with React, featuring smooth animations, dark/light mode, and showcasing my professional projects and skills.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "🌐",
      link: "https://github.com/naveenkm21/portfolio",
      githubRepo: "naveenkm21/portfolio",
      featured: true,
      status: "Featured Project"
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      category: "programming",
      description: "Comprehensive collection of data structures and algorithms implementations in multiple programming languages with detailed explanations and examples.",
      technologies: ["Python", "Java", "C++", "Algorithms"],
      image: "🧮",
      link: "https://github.com/naveenkm21/DSA",
      githubRepo: "naveenkm21/DSA",
      status: "Academic Project"
    },
    {
      id: 3,
      title: "Machine Learning Projects",
      category: "ai-ml",
      description: "Collection of machine learning projects including predictive models, data analysis, and AI implementations for real-world problem solving.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      image: "🤖",
      link: "https://github.com/naveenkm21/ML-Projects",
      githubRepo: "naveenkm21/ML-Projects",
      status: "Research Project"
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      category: "web",
      description: "Full-stack web development projects from bootcamp training, covering frontend frameworks, backend APIs, and database integration.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      image: "💻",
      link: "https://github.com/naveenkm21/web-dev-bootcamp",
      githubRepo: "naveenkm21/web-dev-bootcamp",
      status: "Learning Project"
    },
    {
      id: 5,
      title: "Cloud Infrastructure",
      category: "cloud",
      description: "AWS cloud infrastructure projects demonstrating serverless architecture, containerization, and DevOps best practices.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "☁️",
      link: "https://github.com/naveenkm21/cloud-projects",
      githubRepo: "naveenkm21/cloud-projects",
      status: "Professional Work"
    },
    {
      id: 6,
      title: "Android App Development",
      category: "mobile",
      description: "Android applications built with modern development practices, including Jetpack Compose and Material Design components.",
      technologies: ["Kotlin", "Android", "Jetpack Compose", "Firebase"],
      image: "📱",
      link: "https://github.com/naveenkm21/android-apps",
      githubRepo: "naveenkm21/android-apps",
      status: "Mobile Project"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code, count: projects.length },
    { id: 'web', name: 'Web Dev', icon: Code, count: projects.filter(p => p.category === 'web').length },
    { id: 'ai-ml', name: 'AI/ML', icon: Brain, count: projects.filter(p => p.category === 'ai-ml').length },
    { id: 'mobile', name: 'Mobile', icon: Smartphone, count: projects.filter(p => p.category === 'mobile').length },
    { id: 'cloud', name: 'Cloud', icon: Cloud, count: projects.filter(p => p.category === 'cloud').length },
    { id: 'programming', name: 'Programming', icon: Code, count: projects.filter(p => p.category === 'programming').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-electric/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/5 to-pink-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary font-medium text-sm border border-primary/20 mb-6">
            <Star className="w-4 h-4 mr-2" />
            My Work
          </span>
          <h2 className="text-5xl font-bold font-poppins text-navy dark:text-white mb-6">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-electric"> Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-electric mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Explore my latest projects from GitHub showcasing expertise in full-stack development, 
            cloud solutions, and artificial intelligence applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                onClick={() => setFilter(category.id)}
                variant={filter === category.id ? "default" : "outline"}
                className={`group relative ${
                  filter === category.id 
                    ? 'bg-gradient-to-r from-primary to-electric text-white shadow-lg' 
                    : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary bg-white dark:bg-gray-800'
                } transition-all duration-300 px-6 py-3 rounded-xl font-medium`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category.name}
                <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                  filter === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-primary/10 group-hover:text-primary'
                }`}>
                  {category.count}
                </span>
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className={`group hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-3 border-0 dark:border dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 ${
                project.featured ? 'ring-2 ring-primary/20 shadow-lg' : ''
              }`}
            >
              <CardContent className="p-0">
                {/* Project Image/Icon */}
                <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-7xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-electric/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </span>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.featured 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-navy' 
                      : project.status === 'Live Project'
                      ? 'bg-gradient-to-r from-green-400 to-green-600 text-white'
                      : 'bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600'
                  }`}>
                    {project.status}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 dark:group-hover:bg-gray-900/80 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                      <Button 
                        size="sm"
                        className="bg-white text-navy hover:bg-gray-100 shadow-lg"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-poppins text-navy dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium hover:from-primary/10 hover:to-electric/10 hover:text-primary transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white dark:border-primary/30 dark:text-primary transition-all duration-300 group-hover:border-primary"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-navy to-purple-800 dark:from-gray-800 dark:to-purple-900 rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold font-poppins mb-4">Ready to Start Your Project?</h3>
            <p className="text-purple-200 dark:text-purple-300 text-lg mb-8 leading-relaxed">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-navy hover:from-yellow-500 hover:to-orange-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start a Project
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
