
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['React', 'AWS', 'AI/ML', 'Next.js', 'Python', 'Java'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-navy">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-400/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Naveen Kumar
              </span>
            </h1>
            <p className="text-xl lg:text-2xl font-medium mb-4 text-purple-100">
              Building Tomorrow's Solutions with Code & Cloud
            </p>
            <p className="text-lg mb-8 text-purple-200 max-w-lg">
              Computer Science undergraduate and aspiring Full-Stack Developer & Cloud Solutions Engineer 
              specializing in React, AI/ML, and AWS cloud technologies.
            </p>

            {/* Animated Skills */}
            <div className="mb-8">
              <p className="text-sm text-purple-200 mb-2">Currently mastering:</p>
              <div className="text-2xl font-semibold">
                <span className="text-yellow-400 transition-all duration-500">
                  {skills[currentSkill]}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-navy hover:from-yellow-500 hover:to-orange-600 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-6xl text-gray-600">
                  👨‍💻
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg animate-float">
                <span className="text-navy font-semibold text-sm">AWS Certified</span>
              </div>
              <div className="absolute bottom-8 -left-8 bg-yellow-400 rounded-full px-4 py-2 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-navy font-semibold text-sm">React Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
