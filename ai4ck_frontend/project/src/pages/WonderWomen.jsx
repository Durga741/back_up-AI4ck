import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';

export function WonderWomen() {
  const wonderWomenPosts = [
    {
      title: "Dr. Geetha Manjunath",
      excerpt: "Founder of NIRAMAI, an AI tool for early, non-invasive breast cancer detection, transforming healthcare access for underserved women.",
      image: "/images/Geetha-Manjunath.jpg", // Path to the image in public/images
      date: "March 15, 2024",
      author: "Founder of NIRAMAI",
    //   category: "AI Leadership"
    },
    {
      title: "Richa Shrivastava",
      excerpt: "Co-founder of Maker’s Asylum, blending AI and traditional crafts to modernize art forms, empower artisans, and preserve heritage while expanding global opportunities..",
      image: "/images/Richa Shrivastava - 1.jpg", // Path to the image in public/images
      date: "March 12, 2024",
    //   author: "",
      category: "Co-founder of Maker’s Asylum"
    },
    {
      title: "Suchi Mukherjee",
      excerpt: "AI-powered fashion platform revolutionizing shopping with personalization while empowering rural artisans and craftspeople.",
      image: "/images/Suchi Mukherjee.jpg", // Path to the image in public/images
      date: "March 10, 2024",
    //   author: "Dr. Lisa Kumar",
      category: "Founder of LimeRoad,"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Wonder Women in AI & Tech
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Celebrating the contributions and achievements of women in technology and AI
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {wonderWomenPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-sm text-indigo-600">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.category}
                  </span>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WonderWomen;
