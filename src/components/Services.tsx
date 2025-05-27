
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: "🎨",
      title: "Front-End Development",
      description: "Custom React/Next.js interfaces with modern design principles, responsive layouts, and optimized performance.",
      features: ["React & Next.js", "Responsive Design", "Modern UI/UX", "Performance Optimization"],
      gradient: "from-purple-600 to-purple-800"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "AWS infrastructure design and optimization for scalable, high-availability applications with cost-effective solutions.",
      features: ["AWS Architecture", "Infrastructure Design", "Cost Optimization", "Scalability Planning"],
      gradient: "from-electric to-blue-600"
    },
    {
      icon: "🤖",
      title: "AI/ML Integration",
      description: "Predictive analytics and intelligent tool development using machine learning algorithms and data science techniques.",
      features: ["Machine Learning", "Predictive Analytics", "Data Visualization", "AI Tool Development"],
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Android applications with Jetpack Compose, focusing on modern development practices and user experience.",
      features: ["Jetpack Compose", "Android Development", "Material Design", "App Optimization"],
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const downloadResume = () => {
    // In a real application, this would download the actual resume PDF
    console.log('Downloading resume...');
    // You would typically have a link to a PDF file here
    // window.open('/path-to-resume.pdf', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-navy mb-4">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-electric mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive development services combining cutting-edge technologies 
            with practical solutions for your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute -top-4 -right-4 text-6xl opacity-20">
                    {service.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold font-poppins mb-3">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Service Features */}
                <div className="p-8 bg-white">
                  <h4 className="font-semibold text-navy mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-gray-300 text-gray-600 hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resume Download Section */}
        <div className="bg-gradient-to-r from-navy to-purple-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold font-poppins mb-4">Ready to Work Together?</h3>
            <p className="text-purple-200 text-lg mb-8 leading-relaxed">
              Download my resume to learn more about my experience, skills, and achievements. 
              Let's discuss how I can contribute to your next project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={downloadResume}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-navy hover:from-yellow-500 hover:to-orange-600 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                📄 Download Resume
              </Button>
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
