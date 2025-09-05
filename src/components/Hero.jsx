"use client"; // ✅ keep this if you're in Next.js App Router

import {
  GraduationCap,
  Code,
  Database,
  Laptop,
  BarChart3,
  ChevronDown,
  Menu,
  X,
  HandHeart, 
  User, 
  Briefcase
} from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const courses = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Master Data Structures &",
      subtitle: "Algorithms using C++",
      bgColor: "bg-blue-500",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Master Data Structures &",
      subtitle: "Algorithms using JAVA",
      bgColor: "bg-green-500",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Master Full Stack",
      subtitle: "Web Development (MERN)",
      bgColor: "bg-purple-500",
      badge: "With Complementary System Design Courses",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Master Data Science",
      subtitle: "& Machine Learning",
      bgColor: "bg-teal-500",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Data Analytics & AI",
      subtitle: "",
      bgColor: "bg-indigo-500",
    },
  ];

  const promoImages = [
    { src: "hs1.jpg", alt: "Classroom Batches" },
    { src: "hs2.jpg", alt: "Live Batches" },
    { src: "hs3.jpg", alt: "Sampoorna Program" },
    { src: "hs4.jpg", alt: "CAST Program" },
    { src: "hs5.jpg", alt: "Deep Learning Festival" },
    { src: "hs6.jpg", alt: "Special Offer" },
  ];

  const features = [
    {
      icon: HandHeart,
      title: "Superb mentors",
      description:
        "Best in class mentors from top Tech schools and Industry favourite Techies are here to teach you.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
    {
      icon: Laptop,
      title: "Industry-vetted curriculum",
      description:
        "Best in class content, aligned to the Tech industry is delivered to you to ensure you are a darling of the Tech industry.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: User,
      title: "Project based learning",
      description:
        "Hands on learning pedagogy with live projects to cover practical knowledge over theoretical one.",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      icon: Briefcase,
      title: "Superb placements",
      description:
        "Result oriented courses with placement across all genres, students as well as Working professionals.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation Header */}
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-auto"
                  src="https://cb3img.s3.ap-south-1.amazonaws.com/img/cblogo.webp"
                  alt="Coding Blocks"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center"
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Learn
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Practice
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Get Hired
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center"
                >
                  <Laptop className="w-4 h-4 mr-2" />
                  IDE
                </a>
              </div>
            </div>

            {/* Login/Signup Button */}
            <div className="hidden md:block">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
                Login / Signup
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="bg-slate-700 border-b border-slate-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-8 py-3">
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm font-medium flex items-center"
              >
                All Courses
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm font-medium"
              >
                Classroom Courses
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm font-medium"
              >
                Live Courses
              </a>
              <a
                href="#"
                className="text-orange-400 hover:text-orange-300 text-sm font-medium relative"
              >
                Sampoorna
                <span className="absolute -top-1 -right-2 bg-red-500 text-xs px-1 rounded-full">
                  !
                </span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm font-medium"
              >
                Success Stories
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                Learn
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                Practice
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                Get Hired
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                IDE
              </a>
              <button className="bg-orange-500 hover:bg-orange-600 text-white w-full px-3 py-2 text-base font-medium rounded-md mt-2">
                Login / Signup
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-2xl p-8 lg:p-12 shadow-2xl">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                    CLASSROOM
                    <br />
                    BATCHES
                  </h1>

                  <div className="inline-block">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                      Registration Open
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white">
                      NOIDA | PITAMPURA | NSP
                    </h2>

                    <div className="inline-block">
                      <span className="bg-blue-400 text-white px-3 py-1 rounded text-sm font-semibold">
                        HIGHLIGHTS
                      </span>
                    </div>

                    <div className="text-white space-y-2 text-sm lg:text-base">
                      <p>
                        Limited Batch Size | Extensive Coverage & Personal
                        Mentoring |
                      </p>
                      <p>
                        Interview Preparation & Resume Building | MAANG Rated
                        Instructors
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Started Button */}
              <div className="mt-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                  Get Started →
                </button>
              </div>
            </div>

            {/* Right Content - Course Cards */}
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition-colors cursor-pointer border border-slate-600"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${course.bgColor} p-3 rounded-lg`}>
                      {course.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg">
                        {course.title}
                      </h3>
                      <p className="text-gray-300">{course.subtitle}</p>
                      {course.badge && (
                        <span className="inline-block mt-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded font-semibold">
                          {course.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Promotional Images Section */}
          <div className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {promoImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Support Chat */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-all">
            <span className="text-sm font-semibold">💬 LIVE Support Chat</span>
          </button>
        </div>
      </div>

      <section className="bg-slate-900/10 py-16 lg:py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/[0.02] bg-[size:75px_75px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/50 to-slate-900" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 mb-16 lg:mb-20">
            {/* Left - Title */}
            <div className="lg:col-span-2 flex items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
                  Why
                </h2>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Coding Blocks?
                </h2>
              </div>
            </div>

            {/* Right - Description */}
            <div className="lg:col-span-3 flex items-center">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full" />
                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed pl-8">
                  With time tested, result oriented pedagogy & industry aligned
                  courses offering project based learning, our courses are your
                  perfect investment into your career. Get the best in the
                  industry!
                </p>
              </div>
            </div>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800 transition-all duration-500 rounded-2xl p-8 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 border border-slate-700/50 hover:border-slate-600"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700/0 via-slate-700/0 to-slate-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className={`inline-flex p-4 rounded-xl ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className={`w-8 h-8 ${feature.color}`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm lg:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
