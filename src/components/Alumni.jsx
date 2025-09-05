"use client"

import React, { useState } from 'react';
import { 
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  ArrowRight
} from 'lucide-react';

const Alumni = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const mainTestimonial = {
    name: "Aditya",
    role: "SDE-1",
    company: "Amazon",
    growth: "45-200x",
    image: "/alumni/aditya.jpg", // You'll need to add actual images
    testimonial: [
      "Coding Blocks is the best choice I made in my career.",
      "I always dreamt of making it to the Tech bigwigs and after having a discussion with one of the mentors at Coding Blocks, I decided that I will go with them.",
      "Everyone here is so brilliant, passionate and focussed.",
      "Coding Blocks helped me in becoming an ace coder and then with Mock coding rounds and experienced Industry coaches telling us how to crack various companies.",
      "Wish Coding Blocks all the success in future, big thanks."
    ]
  };

  const alumniTestimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      image: "/alumni/sarah.jpg",
      companyLogo: "/companies/google.png"
    },
    {
      name: "Rahul Sharma", 
      role: "Product Manager",
      company: "Microsoft",
      image: "/alumni/rahul.jpg",
      companyLogo: "/companies/microsoft.png"
    },
    {
      name: "Priya Patel",
      role: "Data Scientist", 
      company: "Meta",
      image: "/alumni/priya.jpg",
      companyLogo: "/companies/meta.png"
    },
    {
      name: "Alex Kumar",
      role: "SDE-2",
      company: "Amazon",
      image: "/alumni/alex.jpg",
      companyLogo: "/companies/amazon.png"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % alumniTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + alumniTestimonials.length) % alumniTestimonials.length);
  };

  return (
    <section className="bg-black-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Inspirational Success stories of CB Alumni
          </h2>
          <p className="text-gray-400 text-lg italic">
            where hard work and determination meets victory!
          </p>
        </div>

        {/* Main Success Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left - Image and Growth Badge */}
            <div className="relative">
              {/* Growth Badge */}
              <div className="absolute -top-4 -left-4 z-10">
                <div className="bg-blue-500 rounded-full w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center shadow-2xl border-4 border-slate-900">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg lg:text-xl">
                      {mainTestimonial.growth}
                    </div>
                    <div className="text-white text-xs lg:text-sm opacity-90">
                      Growth
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 aspect-[4/3]">
                {/* Placeholder for actual image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {mainTestimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Professional overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              {/* Name and Role */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {mainTestimonial.name}
                </h3>
                <p className="text-gray-400 text-lg mb-4">
                  {mainTestimonial.role}
                </p>

                {/* Company Info */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-gray-400">Working at</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-bold text-xl">
                      {mainTestimonial.company}
                    </span>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-500 mb-4 opacity-50" />
                <div className="space-y-4">
                  {mainTestimonial.testimonial.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 pt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-400 ml-2">5.0/5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Alumni Success Stories */}
        <div className="relative">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-8 text-center">
            More Success Stories
          </h3>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
            <button
              onClick={prevTestimonial}
              className="bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
            <button
              onClick={nextTestimonial}
              className="bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Alumni Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-12">
            {alumniTestimonials.map((alumni, index) => (
              <div 
                key={index}
                className={`bg-slate-800 rounded-xl p-4 transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-slate-700 ${
                  index === currentTestimonial ? 'ring-2 ring-blue-500 bg-slate-700' : ''
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                {/* Alumni Image */}
                <div className="relative mb-4">
                  <div className="w-full aspect-square bg-slate-600 rounded-lg flex items-center justify-center overflow-hidden">
                    <span className="text-white text-2xl font-bold">
                      {alumni.name.charAt(0)}
                    </span>
                  </div>

                  {/* Company Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg">
                    <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-slate-700">
                        {alumni.company.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Alumni Info */}
                <div className="text-center">
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {alumni.name}
                  </h4>
                  <p className="text-gray-400 text-xs mb-2">
                    {alumni.role}
                  </p>
                  <p className="text-blue-400 text-xs font-medium">
                    {alumni.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {alumniTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-500' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2">
            <span>View All Success Stories</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Alumni;