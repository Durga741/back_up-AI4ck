// import React, { useState } from 'react';
// import { Send, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-2 gap-12">

//       {/* Contact Form Section */}
//       <div className="bg-white rounded-xl shadow-lg p-8">
//         <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h3>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
//               placeholder="Your name"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
//               placeholder="you@example.com"
//             />
//           </div>

//           <div>
//             <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
//             <input
//               type="text"
//               name="subject"
//               id="subject"
//               required
//               value={formData.subject}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
//               placeholder="How can we help?"
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//             <textarea
//               name="message"
//               id="message"
//               rows={4}
//               required
//               value={formData.message}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
//               placeholder="Your message..."
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
//           >
//             <Send className="w-5 h-5 mr-2" />
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Contact Information Section */}
//       <div className="bg-white rounded-xl shadow-lg p-8">
//         <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get in Touch</h3>
//         <div className="space-y-6">
//           <div className="flex items-start">
//             <MapPin className="w-6 h-6 text-purple-600 mt-1 mr-4" />
//             <div>
//               <h4 className="font-medium text-gray-900">USA Location</h4>
//               <p className="text-gray-600">8751 Collin McKinney Pkwy, Suite 1102, McKinney, TX 75070</p>
//               <h4 className="font-medium text-gray-900">India Location</h4>
//               <p className="text-gray-600">Raheja Mindspace, Survey No.64, Building Number 9, 13th Floor, Madhapur, Hyderabad, Telangana 500081</p>
//               {/* <p className="text-gray-600">Bangalore, Karnataka 560001</p> */}
//             </div>
//           </div>

//           <div className="flex items-start">
//             <Phone className="w-6 h-6 text-purple-600 mt-1 mr-4" />
//             <div>
//               <h4 className="font-medium text-gray-900">Call Us</h4>
//               <p className="text-gray-600">+91 93920 14678</p>
//               <p className="text-gray-600">1800-419-7909 (For INDIA only)</p>
//             </div>
//           </div>

//           <div className="flex items-start">
//             <Mail className="w-6 h-6 text-purple-600 mt-1 mr-4" />
//             <div>
//               <h4 className="font-medium text-gray-900">Email Us</h4>
//               <p className="text-gray-600">helpdesk@visyscloudtech.com</p>
//               <p className="text-gray-600">registration@visyscloudtech.com</p>
//             </div>
//           </div>
//         </div>

//         {/* <div className="mt-8 pt-8 border-t border-gray-200">
//           <h4 className="font-medium text-gray-900 mb-4">Follow Us</h4>
//           <div className="flex space-x-4">
//             <a href="#" className="text-gray-400 hover:text-purple-600">
//               <span className="sr-only">Twitter</span>
//               <MessageSquare className="h-6 w-6" />
//             </a>
//           </div>
//         </div> */}
//       </div>

//     </div>
//   </div>
// </div>
//   );
// }
// //  export default ContactPage;


import React, { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-50 py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Us
            </h3>
            {status === "success" && (
              <div className="text-green-600 mb-8 font-bold">
                Message sent successfully!
              </div>
            )}
            {status === "error" && (
              <div className="text-red-600 mb-4">
                An error occurred. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900">USA Location</h4>
                  <p className="text-gray-600">
                    8751 Collin McKinney Pkwy, Suite 1102, McKinney, TX 75070
                  </p>
                  <h4 className="font-medium text-gray-900">India Location</h4>
                  <p className="text-gray-600">
                    Raheja Mindspace, Survey No.64, Building Number 9, 13th
                    Floor, Madhapur, Hyderabad, Telangana 500081
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+91 93920 14678</p>
                  <p className="text-gray-600">1800-419-7909 (For INDIA only)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900">Email Us</h4>
                  <p className="text-gray-600">helpdesk@visyscloudtech.com</p>
                  <p className="text-gray-600">registration@visyscloudtech.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
