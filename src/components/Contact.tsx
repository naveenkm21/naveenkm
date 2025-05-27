
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "naveenkumarmohanarajan38@gmail.com",
      link: "mailto:naveenkumarmohanarajan38@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 9106663529",
      link: "tel:+919106663529"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/naveenkumarmohanarajan",
      link: "https://linkedin.com/in/naveenkumarmohanarajan"
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/naveenkm21",
      link: "https://github.com/naveenkm21"
    },
    {
      icon: "🌐",
      label: "Google Developer",
      value: "g.dev/naveenkm_srmuniversity",
      link: "https://g.dev/naveenkm_srmuniversity"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "💻",
      url: "https://github.com/naveenkm21",
      color: "hover:text-gray-800"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/naveenkumarmohanarajan",
      color: "hover:text-blue-600"
    },
    {
      name: "Google Developer",
      icon: "🌐",
      url: "https://g.dev/naveenkm_srmuniversity",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-navy mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-electric mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together 
            to bring your ideas to life with cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold font-poppins text-navy mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border-gray-300 focus:border-purple-600 focus:ring-purple-600 resize-none"
                    placeholder="Tell me about your project or any questions you have..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-electric text-white hover:from-purple-700 hover:to-blue-600 transition-all duration-300 py-3"
                >
                  Send Message 🚀
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold font-poppins text-navy mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors group"
                    >
                      <div className="text-2xl mr-4">{item.icon}</div>
                      <div>
                        <p className="font-medium text-navy group-hover:text-purple-600 transition-colors">
                          {item.label}
                        </p>
                        <p className="text-gray-600 text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold font-poppins text-navy mb-6">Follow Me</h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-electric rounded-lg text-white text-center">
                  <h4 className="font-semibold mb-2">Let's Build Something Amazing!</h4>
                  <p className="text-sm text-purple-100">
                    I'm always excited to work on innovative projects and collaborate with talented teams.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
