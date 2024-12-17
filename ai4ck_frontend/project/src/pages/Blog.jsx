// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiCalendar, FiUser, FiMessageCircle } from 'react-icons/fi';

// const Blog = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch the blog posts from the API
//     const fetchBlogPosts = async () => {
//       try {
//         const response = await fetch('http://192.168.20.14:1337/api/blogposts');
//         const data = await response.json();
//         setBlogPosts(data); // Set the fetched data to state
//       } catch (error) {
//         console.error('Error fetching blog posts:', error);
//       } finally {
//         setLoading(false); // Set loading to false once data is fetched
//       }
//     };

//     fetchBlogPosts();
//   }, []); // Empty dependency array to fetch only once when component mounts

//   if (loading) {
//     return (
//       <div className="text-center py-20">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-screen bg-gray-50"
//     >
//       {/* Hero Section */}
//       <section className="bg-purple-600 text-white py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Ai4CoolKids Blog</h1>
//             <p className="text-xl opacity-90">
//               Insights, stories, and updates from the world of AI and technology
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Blog Posts Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogPosts.map((post, index) => (
//               <motion.article
//                 key={post.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 + index * 0.1 }}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="relative h-48">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
//                       {post.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h2 className="text-xl font-semibold text-gray-900 mb-2">
//                     {post.title}
//                   </h2>
//                   <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                   <div className="flex items-center text-sm text-gray-500">
//                     <FiUser className="mr-2" />
//                     <span className="mr-4">{post.author}</span>
//                     <FiCalendar className="mr-2" />
//                     <span className="mr-4">{post.date}</span>
//                     <FiMessageCircle className="mr-2" />
//                     <span>{post.comments} comments</span>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default Blog;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FiCalendar, FiUser } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('http://192.168.20.14:1337/api/blogposts?populate=Images');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();

        if (result.data) {
          const formattedPosts = result.data.map((post) => ({
            id: post.id,
            title: post.Metatitle || 'Untitled Post',
            description: post.MetaDescription || 'No description available.',
            createdAt: post.Createdat || 'No date available',
            author: post.uploadedby || 'Anonymous',
            images: post.Images?.map((image) => image.url) || [], // Fetch all image URLs
          }));
          setBlogPosts(formattedPosts);
        } else {
          setError('No blog posts found');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return ;
  }

  if (error) {
    return <div className="text-center py-20">Error: {error}</div>;
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      {/* <section className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ai4CoolKids Blog</h1>
            <p className="text-xl opacity-90">
              Insights, stories, and updates from the world of AI and technology
            </p>
          </motion.div>
        </div>
      </section> */}
      <section className="bg-purple-600 text-white py-20">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-center max-w-4xl mx-auto"
           >
             <h1 className="text-4xl md:text-5xl font-bold mb-6">Ai4CoolKids Blog</h1>
             <p className="text-xl opacity-90">
               Insights, stories, and updates from the world of AI and technology
             </p>
           </motion.div>
         </div>
       </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <Slider {...carouselSettings}>
                    {post.images.length > 0 ? (
                      post.images.map((imageUrl, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={`http://192.168.20.14:1337${imageUrl}`}
                          alt={`Image ${imgIndex + 1} for ${post.title}`}
                          className="w-full h-48 object-cover"
                        />
                      ))
                    ) : (
                      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        No Images Available
                      </div>
                    )}
                  </Slider>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiUser className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <FiCalendar className="mr-2" />
                    <span>{post.createdAt}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
