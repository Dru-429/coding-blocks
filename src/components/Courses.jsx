import React from 'react';
import { 
  RotateCcw,
  Code, 
  Target,
  Globe,
  Smartphone,
  BarChart3,
  Zap,
  CheckCircle,
  Users,
  BookOpen,
  Award,
  MessageCircle,
  Calendar,
  ChevronDown
} from 'lucide-react';

const Courses = () => {
  const courseCategories = [
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Data Structures",
      subtitle: "& Algorithms",
      bgColor: "bg-purple-600",
      isActive: true
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Competitive",
      subtitle: "Programming",
      bgColor: "bg-slate-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Interview",
      subtitle: "Preparation", 
      bgColor: "bg-slate-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web",
      subtitle: "Development",
      bgColor: "bg-slate-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Android",
      subtitle: "Development",
      bgColor: "bg-slate-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Science",
      subtitle: "& ML",
      bgColor: "bg-slate-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Micro",
      subtitle: "courses",
      bgColor: "bg-slate-600"
    }
  ];

  const courseCards = [
    {
      title: "Master Data structures and Algorithms using C++",
      bgColor: "bg-gradient-to-br from-purple-600 to-purple-700",
      icon: <RotateCcw className="w-6 h-6" />,
      tags: ["Classroom", "Live", "Online"],
      tagColors: ["bg-orange-500", "bg-red-500", "bg-blue-500"]
    },
    {
      title: "Master Data structures and Algorithms using Java", 
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      icon: <Code className="w-6 h-6" />,
      tags: ["Classroom", "Live", "Online"],
      tagColors: ["bg-orange-500", "bg-red-500", "bg-blue-500"]
    },
    {
      title: "Master Data structures and Algorithms using Python",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600", 
      icon: <BarChart3 className="w-6 h-6" />,
      tags: ["Live"],
      tagColors: ["bg-red-500"]
    }
  ];

  const courseFeatures = [
    "350+ problems & 6 projects",
    "Foundation, Basics and Advanced modules", 
    "Progress tracking and feedback",
    "Certificate of Excellence/Completion",
    "Placement assistance",
    "Doubt support",
    "Curriculum designed for beginners, No coding experience required"
  ];

  return (
    <section className="bg-black-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Courses based on subjects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Learn and grow as a developer with our Result oriented pedagogy and project based learning.
          </p>
        </div>

        {/* Course Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
          {courseCategories.map((category, index) => (
            <div 
              key={index}
              className={`${category.bgColor} ${
                category.isActive ? 'ring-2 ring-purple-400' : ''
              } rounded-xl p-4 text-center cursor-pointer hover:scale-105 transition-transform duration-200`}
            >
              <div className="flex justify-center mb-3">
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-white text-sm font-semibold leading-tight">
                {category.title}
              </h3>
              <p className="text-white text-sm opacity-90">
                {category.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            About Data Structures and Algorithms
          </h3>
          <p className="text-gray-400 leading-relaxed max-w-5xl">
            Data Structures and Algorithms are the building blocks of programming & required to write optimised code. They are also necessary to start development level programs 
            like Web development and Android app development. These are the skills that are typically tested when students appear for Placement drives for Jobs and Internships. 
            Ideal for students for first and second year of college and for those looking forward to Placements & Internships. <span className="italic">This course is designed for 
            absolute beginners and does not require any knowledge of coding.</span>
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courseCards.map((course, index) => (
            <div 
              key={index}
              className={`${course.bgColor} rounded-xl p-6 text-white hover:scale-[1.02] transition-transform duration-300`}
            >
              {/* Course Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    {course.icon}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`${course.tagColors[tagIndex]} px-2 py-1 rounded text-xs font-semibold`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Course Title */}
              <h4 className="text-xl font-bold mb-4 leading-tight">
                {course.title}
              </h4>

              {/* Course Includes */}
              <div className="mb-6">
                <h5 className="font-semibold mb-3">This course includes</h5>
                <div className="space-y-2">
                  {courseFeatures.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-80" />
                      <span className="text-sm opacity-90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
                Show Course details
              </button>
            </div>
          ))}
        </div>

        {/* Career Counselling Section */}
        <div className="mb-12">
          <p className="text-gray-400 text-lg mb-6 max-w-4xl">
            You can also seek Career counselling and Expert assistance in choosing your course or mode of study
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
            Get Career advice
          </button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex items-center justify-between">
            <h4 className="text-white text-lg font-semibold">
              You can also explore our Courses basis the mode of study
            </h4>
            <button className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors">
              <span>Check now</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Courses;