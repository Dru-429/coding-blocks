import React from 'react';
import { 
  Star,
  Mail,
  Phone,
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Github,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const reviewPlatforms = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5 text-blue-500" />,
      rating: "4.8",
      bgColor: "bg-slate-800"
    },
    {
      name: "Google", 
      icon: <div className="w-5 h-5 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">G</span>
      </div>,
      rating: "4.7",
      bgColor: "bg-slate-800"
    },
    {
      name: "Quora",
      icon: <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">Q</span>
      </div>,
      rating: "100+",
      subtitle: "Questions",
      bgColor: "bg-slate-800"
    }
  ];

  const footerSections = [
    {
      title: "PROGRAMS",
      links: [
        "Classroom courses",
        "Live interactive courses", 
        "Online Self paced courses",
        "Placement Bootcamp",
        "Success stories",
        "Scholarship Test",
        "Get Career Advice"
      ]
    },
    {
      title: "COMPANY",
      links: [
        "About Us",
        "Hire our students",
        "Become a Franchise", 
        "Contact Us"
      ]
    },
    {
      title: "RESOURCES",
      links: [
        "Hacker Blocks",
        "Hiring Blocks",
        "IDE",
        "Blogs",
        "Podcasts"
      ]
    },
    {
      title: "COMMUNITY", 
      links: [
        "Become a CB Superhero",
        "Request Workshop in college",
        "Request Chapter in college"
      ]
    }
  ];

  const contactInfo = [
    {
      title: "CONTACT",
      items: [
        {
          icon: <Mail className="w-4 h-4" />,
          text: "info@codingblocks.com",
          link: "mailto:info@codingblocks.com"
        },
        {
          icon: <Phone className="w-4 h-4" />,
          text: "1800-274-4504",
          link: "tel:1800-274-4504"
        }
      ]
    },
    {
      title: "COUNSELLING TEAM",
      items: [
        {
          icon: <Mail className="w-4 h-4" />,
          text: "admissions@codingblocks.com", 
          link: "mailto:admissions@codingblocks.com"
        },
        {
          icon: <Phone className="w-4 h-4" />,
          text: "9999-579-111/222/333",
          link: "tel:9999579111"
        }
      ]
    }
  ];

  const importantLinks = [
    "Data Structures and Algorithms in C++", "Data Structures and Algorithms in Java", "Data Structures and Algorithms in Python", 
    "Python for Data science", "Master Interview prep with C++", "Master Interview prep with Java", "Interview Series",
    "Master Preparation for FAANG", "Dynamic Programming - Must Do Problem Set", "Data Structures in Real Life Projects",
    "Graph Algorithms", "Dynamic Programming", "Python for Developers Master Course", "Java collections framework",
    "Selenium with Python", "Digital Marketing course", "Java for Class XII Board practicals", "C++ for Class XII boards",
    "Master Java Web development", "Master PHP and Web development", "Master Frontend Web development", 
    "Master Backend Web development using node.js", "Master Android app development using Kotlin",
    "Master Data Science and Machine learning", "Master Machine learning"
  ];

  const socialLinks = [
    { icon: <Youtube className="w-5 h-5" />, name: "YouTube", color: "hover:text-red-500" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", color: "hover:text-pink-500" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", color: "hover:text-blue-500" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", color: "hover:text-blue-400" },
    { icon: <Github className="w-5 h-5" />, name: "GitHub", color: "hover:text-gray-300" }
  ];

  return (
    <footer className="bg-slate-900 text-white">

      {/* Reviews Section */}
      <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            {/* Reviews Title */}
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
                Our Reviews
              </h2>
              <p className="text-gray-400">
                We love our students as much as they love us!
              </p>
            </div>

            {/* Review Platforms */}
            <div className="flex flex-wrap gap-4">
              {reviewPlatforms.map((platform, index) => (
                <div 
                  key={index}
                  className={`${platform.bgColor} rounded-lg p-4 flex items-center space-x-3 min-w-[140px]`}
                >
                  <div className="flex-shrink-0">
                    {platform.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="text-white font-bold text-lg">
                        {platform.rating}
                      </span>
                      {platform.rating !== "100+" && (
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      )}
                    </div>
                    {platform.subtitle && (
                      <p className="text-gray-400 text-xs">
                        {platform.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h3 className="text-white font-bold text-sm mb-4 tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              {contactInfo.map((contact, index) => (
                <div key={index}>
                  <h3 className="text-white font-bold text-sm mb-4 tracking-wide">
                    {contact.title}
                  </h3>
                  <div className="space-y-3">
                    {contact.items.map((item, itemIndex) => (
                      <a 
                        key={itemIndex}
                        href={item.link}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {item.icon}
                        <span className="text-sm">{item.text}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Important Links Section */}
      <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Logo Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CB</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">CODING BLOCKS</h3>
                  <p className="text-gray-400 text-xs">Code your Way to Success</p>
                </div>
              </div>
            </div>

            {/* Important Links */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-bold text-sm mb-4 tracking-wide">
                Important Links
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {importantLinks.map((link, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white text-xs transition-colors duration-200 block py-1"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 hover:bg-slate-700 rounded-lg`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright and Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>

              <div className="text-xs text-gray-400">
                Copyright 2022 - CODING BLOCKS PRIVATE LIMITED
              </div>
            </div>
          </div>

          {/* Made with Love */}
          <div className="text-center mt-4 pt-4 border-t border-slate-700">
            <p className="text-xs text-gray-400 flex items-center justify-center space-x-2">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>& passion by Coding Blocks</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;