import React from 'react';
import { 
  ArrowRight,
  Clock,
  Phone,
  ExternalLink,
  Newspaper,
  BookOpen
} from 'lucide-react';

const NewsAndBlog = () => {
  const newsItems = [
    {
      logo: "🏆",
      publication: "The Pioneer",
      headline: "Coding is a Game changer",
      author: "- Varun Kohli, Coding Blocks"
    },
    {
      logo: "🎯", 
      publication: "GFEL",
      headline: "Top 50 Organisations in Education award - 2019"
    },
    {
      logo: "📰",
      publication: "The Indian EXPRESS",
      headline: "Teaching Coding to School students for free"
    },
    {
      logo: "📰",
      publication: "The Indian EXPRESS", 
      headline: "Changing the realm of Coding Education in India"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "A thorough guide to C++ for Beginners",
      readTime: "3 min read",
      image: "/blog/cpp-guide.jpg",
      bgColor: "bg-blue-100",
      category: "Programming"
    },
    {
      id: 2,
      title: "A beginner's guide to the skills you learn in CP",
      readTime: "3 min read", 
      image: "/blog/cp-guide.jpg",
      bgColor: "bg-orange-100",
      category: "Competitive Programming"
    },
    {
      id: 3,
      title: "Rising demand for Data science professionals in India",
      readTime: "4 min read",
      image: "/blog/data-science.jpg", 
      bgColor: "bg-purple-100",
      category: "Data Science"
    },
    {
      id: 4,
      title: "Scope for Android developers now & in the upcoming years",
      readTime: "3 min read",
      image: "/blog/android-scope.jpg",
      bgColor: "bg-green-100", 
      category: "Mobile Development"
    }
  ];

  return (
    <section className=" py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className=" gap-12 lg:gap-16 mb-16">

          {/* IN THE NEWS Section */}
          <div className="lg:col-span-1 w-full bg-slate-900 py-28 px-20">
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 tracking-wide">
                IN THE NEWS
              </h2>
              <div className="w-48 h-1 bg-blue-500"></div>
            </div>

            <div className="space-y-6 flex">
              {newsItems.map((item, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer hover:bg-slate-800 p-4 rounded-lg transition-colors duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
                        <span className="text-lg">{item.logo}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-blue-400 text-sm font-semibold">
                          {item.publication}
                        </span>
                      </div>
                      <h3 className="text-white font-semibold text-sm leading-tight mb-2">
                        {item.headline}
                      </h3>
                      {item.author && (
                        <p className="text-gray-400 text-xs mb-2">
                          {item.author}
                        </p>
                      )}
                      <button className="text-orange-400 hover:text-orange-300 text-xs font-medium flex items-center space-x-1 transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest from the Blog Section */}
          <div className="lg:col-span-2 mt-20 bg-black-900">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Latest from the <span className="text-blue-400">Blog</span>
              </h2>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
                <span>Read all blogs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className="bg-slate-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer group"
                >
                  {/* Blog Image */}
                  <div className={`${post.bgColor} h-32 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-slate-800/40"></div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-white/90 text-slate-800 px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-white/60" />
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-sm leading-tight mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs">{post.readTime}</span>
                      </div>

                      <button className="text-orange-400 hover:text-orange-300 text-xs font-medium flex items-center space-x-1 transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Talk to our Learning Consultant Section */}
        <div className="bg-slate-800 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Left Content */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Talk to our Learning Consultant!
              </h2>
              <p className="text-gray-400 text-lg">
                Get a free counselling session from our experts
              </p>
            </div>

            {/* Right Content - Contact Info */}
            <div className="text-center lg:text-right">
              <div className="mb-4">
                <div className="flex items-center justify-center lg:justify-end space-x-2 mb-2">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-400 text-sm">Contact Number</span>
                </div>
                <a 
                  href="tel:1800-274-4504"
                  className="text-3xl lg:text-4xl font-bold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  1800 - 274 - 4504
                </a>
              </div>

              <button className="text-orange-400 hover:text-orange-300 text-sm font-medium flex items-center space-x-1 transition-colors mx-auto lg:ml-auto lg:mr-0">
                <span>or let us call you!</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsAndBlog;