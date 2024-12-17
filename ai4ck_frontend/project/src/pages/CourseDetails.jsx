import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate

// Sub-Courses Data with Images
const courseDetails = {
  1: {
    title: "AI Tools",
    subCourses: [
      { id: 1, title: "Introduction to AI Tools for Everyday Life", description: "Discover how AI tools can simplify and enhance your everyday life with practical applications and insights for daily tasks.", image: "https://www.myskillsfuture.gov.sg/content/portal/en/career-resources/career-resources/education-career-personal-development/artificial-intelligence---the-future-of-the-workplace/jcr:content/par/article_container_757027542/par-article-container/columncontrol/col-8-4-1/image.img.png/1612266456073.png" },
      { id: 2, title: "AI for Learning, Productivity, and Personal Growth", description: "Explore how AI can boost your learning, enhance productivity, and foster personal growth through innovative tools and techniques.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2R_VUo51oBMnYB-tQ77TwttT2DiSPN__VPbv27257HT37b9QQeHMOxZutrOgG4e0yBY&usqp=CAU" },
      { id: 3, title: "AI in Digital Marketing", description: "Discover how AI transforms digital marketing by optimizing strategies, enhancing customer targeting, and improving campaign performance.", image: "https://www.myskillsfuture.gov.sg/content/portal/en/career-resources/career-resources/education-career-personal-development/artificial-intelligence---the-future-of-the-workplace/jcr:content/par/article_container_757027542/par-article-container/columncontrol/col-8-4-1/image.img.png/1612266456073.png" },
      { id: 4, title: "AI for Job and Career Development", description: "Explore how AI can boost your career development by enhancing job search, skill-building, and personal growth opportunities in the professional world.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2R_VUo51oBMnYB-tQ77TwttT2DiSPN__VPbv27257HT37b9QQeHMOxZutrOgG4e0yBY&usqp=CAU" },
      { id: 5, title: "AI for Creativity, Personal Branding, and Entrepreneurship", description: "Discover how AI can fuel creativity, enhance personal branding, and support entrepreneurship by streamlining processes and boosting innovation.", image: "https://www.myskillsfuture.gov.sg/content/portal/en/career-resources/career-resources/education-career-personal-development/artificial-intelligence---the-future-of-the-workplace/jcr:content/par/article_container_757027542/par-article-container/columncontrol/col-8-4-1/image.img.png/1612266456073.png" }
    ]
  },
  // Add more courses as needed
};

const CourseDetails = () => {
  const { id } = useParams(); // Get the courseId from URL
  const course = courseDetails[id]; // Retrieve the corresponding course
  const [selectedSubCourse, setSelectedSubCourse] = useState(course.subCourses[0]); // Default to the first sub-course
  const navigate = useNavigate(); // Initialize navigate function

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleEnroll = (subCourse) => {
    // Set the selected sub-course for payment
    setSelectedSubCourse(subCourse);
  };

  const handlePayment = () => {
    if (typeof window.Razorpay === "undefined") {
      alert("Razorpay SDK not loaded. Please try again.");
      return;
    }

    const options = {
      key: "rzp_live_WONtbIG5GVVkfH", // Replace with your Razorpay API Key
      amount: 100, // Amount in paise (₹100)
      currency: "INR",
      name: "Ai4CoolKids",
      description: "Enroll in the course",
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);

        // Redirect to the "redirection" page after successful payment
        navigate("/redirection");
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Enroll in {course.title}
        </h2>

        {/* Selected Sub-Course Information */}
        <div className="text-center mb-8">
          {selectedSubCourse && (
            <>
              <p className="text-xl mb-4">
                You have selected the main course "{course.title}".
              </p>
              <p className="text-lg text-gray-600">
                Click below to complete your payment.
              </p>
            </>
          )}
        </div>

        {/* Sub-Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {course.subCourses.map((subCourse) => (
            <div
              key={subCourse.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleEnroll(subCourse)}
            >
              <div className="relative h-48">
                <img
                  src={subCourse.image}
                  alt={subCourse.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {subCourse.title}
              </h3>
              <h4 className="text-xl text-gray-900 mt-4">
                {subCourse.description}
              </h4>
            </div>
          ))}
        </div>

        {/* Payment Section */}
        <div className="text-center mt-8">
          <button
            onClick={handlePayment}
            className="bg-blue-800 text-white px-14 py-3 rounded-md text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Pay For All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
