
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      period: "2023 - 2027",
      title: "B.Tech in Computer Science",
      institution: "SRM Institute of Science & Technology",
      description: "Pursuing comprehensive computer science education with focus on software development and emerging technologies."
    },
    {
      period: "2023",
      title: "10th & 12th Grade",
      institution: "K.D. Ambani Reliance Foundation School",
      description: "Strong academic foundation with excellence in mathematics and science subjects."
    }
  ];

  const experience = [
    {
      period: "Jan - Mar 2025",
      title: "AWS Academy Graduate Intern",
      company: "AWS Academy",
      description: "Focus on AWS tools and cloud infrastructure, gaining hands-on experience with cloud solutions."
    },
    {
      period: "Dec 2024 - Jan 2025",
      title: "ML Intern",
      company: "Reliance Industries",
      description: "Gasifier refractory lifespan prediction using Power BI dashboards and machine learning algorithms."
    },
    {
      period: "Oct - Dec 2024",
      title: "Android Dev Intern",
      company: "AICTE-EDUSKILLS",
      description: "Jetpack Compose app development with focus on modern Android development practices."
    },
    {
      period: "May - Jun 2024",
      title: "AI Intern",
      company: "PERSONIFWY",
      description: "Hands-on AI project contributions and machine learning model development."
    }
  ];

  const skills = [
    { category: "Languages", items: ["C/C++", "Java", "Python", "JavaScript"] },
    { category: "Web Technologies", items: ["HTML", "CSS", "React", "Next.js"] },
    { category: "Cloud & Tools", items: ["AWS", "Power BI", "Jetpack Compose"] },
    { category: "AI/ML", items: ["Machine Learning", "Predictive Analytics"] }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-navy mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-electric mx-auto mb-8"></div>
        </div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold font-poppins text-navy mb-4">Passionate Developer & Cloud Enthusiast</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I am a motivated Computer Science undergraduate with a passion for merging front-end development 
                with cutting-edge cloud technologies and artificial intelligence. My journey spans from creating 
                intuitive user interfaces with React and Next.js to building scalable cloud solutions on AWS.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dedicated to continuous learning and proactive problem-solving, I thrive on transforming complex 
                challenges into elegant, efficient solutions. My experience across multiple internships has shaped 
                my understanding of both technical excellence and real-world application development.
              </p>
              
              {/* Latest Learning Badge */}
              <div className="mt-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-electric text-white rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                Currently Exploring: DevOps Tools
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-navy p-8 rounded-2xl text-white">
                <h4 className="text-xl font-semibold mb-4">Certifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    AWS Cloud Foundations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    AWS Cloud Architecting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Oracle Java Certification
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Oracle Cloud Infrastructure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold font-poppins text-navy mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-navy">{item.title}</h4>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{item.period}</span>
                    </div>
                    <p className="text-electric font-medium mb-2">{item.institution}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold font-poppins text-navy mb-8">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-electric hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-navy">{item.title}</h4>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{item.period}</span>
                    </div>
                    <p className="text-purple-600 font-medium mb-2">{item.company}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold font-poppins text-navy mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-navy mb-4">{skillGroup.category}</h4>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-navy px-3 py-1 rounded-full text-sm mx-1 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
