"use client";

import React, { useState } from 'react';
import { 
  Users, 
  User, 
  UserCheck,
  MessageCircle,
  CheckCircle,
  Briefcase,
  Calendar,
  Play,
  Volume2,
  Maximize2,
  BarChart3,
  Target,
  BookOpen,
  Award,
  Clock,
} from 'lucide-react';

const ChooseHowYouLearn = () => {
  const [activeTab, setActiveTab] = useState(0);

  const learningModes = [
    {
      title: "Classroom Program",
      description: "The most popular methods of learning opted by students who believe in perfection. This is extremely successful and result oriented because of strong Peer group, personal attention and round the clock availability of mentors.",
      features: [
        {
          icon: <Users className="w-8 h-8" />,
          title: "Limited Batch Size",
          bgColor: "bg-cyan-500/20"
        },
        {
          icon: <User className="w-8 h-8" />,
          title: "Individual attention", 
          bgColor: "bg-orange-500/20"
        },
        {
          icon: <UserCheck className="w-8 h-8" />,
          title: "Awesome Peer group",
          bgColor: "bg-purple-500/20"
        },
        {
          icon: <BarChart3 className="w-8 h-8" />,
          title: "Continuous feedback & monitoring",
          bgColor: "bg-green-500/20"
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: "100% Course completion",
          bgColor: "bg-cyan-500/20"
        },
        {
          icon: <MessageCircle className="w-8 h-8" />,
          title: "Dedicated Doubt support",
          bgColor: "bg-orange-500/20"
        },
        {
          icon: <Briefcase className="w-8 h-8" />,
          title: "Dedicated Placement support",
          bgColor: "bg-purple-500/20"
        },
        {
          icon: <Calendar className="w-8 h-8" />,
          title: "In-class Hackathons & Assignment sessions",
          bgColor: "bg-green-500/20"
        }
      ],
      videoTitle: "Classroom Program",
      instructor: "Varun Kohli",
      buttonText: "Check out all Classroom courses"
    },
    {
      title: "Live Interactive Program", 
      description: "Live interactive programs are a replica of the Classroom programs with all feature of the Classroom model except physical presence of the Mentor and absence of close interaction with the peer group. This model is extremely popular amongst students who want to learn from a popular mentor of choice but are separated demographically.",
      features: [
        {
          icon: <Users className="w-8 h-8" />,
          title: "Medium Batch Size",
          bgColor: "bg-blue-500/20"
        },
        {
          icon: <User className="w-8 h-8" />,
          title: "Individual attention",
          bgColor: "bg-orange-500/20"
        },
        {
          icon: <UserCheck className="w-8 h-8" />,
          title: "Awesome Peer group", 
          bgColor: "bg-purple-500/20"
        },
        {
          icon: <BarChart3 className="w-8 h-8" />,
          title: "Continuous feedback & monitoring",
          bgColor: "bg-green-500/20"
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: "100% Course completion",
          bgColor: "bg-blue-500/20"
        },
        {
          icon: <MessageCircle className="w-8 h-8" />,
          title: "Dedicated Doubt support",
          bgColor: "bg-orange-500/20"
        },
        {
          icon: <Briefcase className="w-8 h-8" />,
          title: "Dedicated Placement support", 
          bgColor: "bg-purple-500/20"
        },
        {
          icon: <Calendar className="w-8 h-8" />,
          title: "In-class Hackathons & Assignment sessions",
          bgColor: "bg-green-500/20"
        }
      ],
      videoTitle: "Live Interactive Program",
      instructor: "Expert Mentors",
      buttonText: "Check out all Live courses"
    },
    {
      title: "Online Guided learning Program",
      description: "Online guided learning courses are driven by our state of the art e-learning portal. These programs carry the same legacy as our Classroom programs. In order to reinforce learning and assist students, we have made our Online guided learning programs 'HYBRID', meaning we have added Live classes of topics where we feel students need interaction with mentors.",
      features: [
        {
          icon: <Target className="w-8 h-8" />,
          title: "Highly Economical",
          bgColor: "bg-green-500/20"
        },
        {
          icon: <BookOpen className="w-8 h-8" />,
          title: "Exhaustive content",
          bgColor: "bg-blue-500/20"
        },
        {
          icon: <Award className="w-8 h-8" />,
          title: "Tech enabled integrated learning",
          bgColor: "bg-purple-500/20"
        },
        {
          icon: <Clock className="w-8 h-8" />,
          title: "Live booster classes",
          bgColor: "bg-orange-500/20"
        },
        {
          icon: <Users className="w-8 h-8" />,
          title: "Visit physical center for Doubt resolution",
          bgColor: "bg-cyan-500/20"
        },
        {
          icon: <BarChart3 className="w-8 h-8" />,
          title: "Continuous feedback & monitoring",
          bgColor: "bg-green-500/20"
        },
        {
          icon: <MessageCircle className="w-8 h-8" />,
          title: "Dedicated Doubt support (optional)",
          bgColor: "bg-blue-500/20"
        },
        {
          icon: <Briefcase className="w-8 h-8" />,
          title: "Dedicated Placement support (optional)",
          bgColor: "bg-purple-500/20"
        }
      ],
      videoTitle: "Online Guided Program",
      instructor: "Self-Paced Learning",
      buttonText: "Check out all Online courses"
    }
  ];

  const currentMode = learningModes[activeTab];

  return (
    <section className="bg-slate-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Choose how you learn!
          </h2>
          <p className="text-gray-400 text-lg max-w-5xl leading-relaxed">
            Each learner has his or her own manner of learning and one model of teaching is not fit for all. At Coding Blocks, we realise this and therefore deliver programs in Classroom, Live interactive and Online guided learning models.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {learningModes.map((mode, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white text-slate-900'
                    : 'bg-transparent text-gray-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {mode.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side - Video/Content */}
          <div className="space-y-6">
            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-lg">
              {currentMode.description}
            </p>

            {/* Video Player Mockup */}
            <div className="relative bg-slate-800 rounded-xl overflow-hidden aspect-video group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
              {/* Video Header */}
              <div className="absolute top-0 left-0 right-0 bg-slate-700/90 p-3 flex items-center space-x-3 z-10">
                <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-slate-900" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{currentMode.videoTitle}</h4>
                  <p className="text-gray-300 text-xs">{currentMode.instructor}</p>
                </div>
                <div className="ml-auto flex space-x-2">
                  <button className="text-white hover:text-cyan-400 transition-colors">
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button className="text-white hover:text-cyan-400 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Video Content Area */}
              <div className="h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white/80 text-sm">Click to play video</p>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 p-3">
                <div className="flex items-center space-x-3">
                  <span className="text-white text-sm">02:03</span>
                  <div className="flex-1 bg-slate-600 h-1 rounded-full">
                    <div className="bg-cyan-400 h-1 rounded-full w-1/3"></div>
                  </div>
                  <span className="text-gray-400 text-sm">15:42</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentMode.features.map((feature, index) => (
                <div 
                  key={index}
                  className={`${feature.bgColor} rounded-xl p-4 hover:scale-105 transition-all duration-200 cursor-pointer group border border-transparent hover:border-white/20`}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="text-white group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h4 className="text-white font-semibold text-sm leading-tight">
                      {feature.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center space-x-2">
                <span>{currentMode.buttonText}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChooseHowYouLearn;