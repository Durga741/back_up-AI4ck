import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(
          'http://192.168.20.14:1337/api/about-us-founding-teams?populate=Image'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();

        if (result.data) {
          const formattedMembers = result.data.map((member) => ({
            id: member.id,
            name: member.Name || 'Unnamed Member',
            role: member.Designation || 'No Role Specified',
            description: member.Description || 'No description available.',
            image: member.Image?.url || '', // Extract the full image URL
          }));
          setTeamMembers(formattedMembers);
        } else {
          setError('No team members found');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching team members:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return ;
  }

  if (error) {
    return <div className="text-center py-20">Error: {error}</div>;
  }

  return (
    <div className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">
            Our Founding Team
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <div className="text-center mb-4">
                  {member.image ? (
                    <img
                      src={`http://192.168.20.14:1337${member.image}`} // Construct the full image URL
                      alt={`${member.name}'s picture`}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-purple-700">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium">
                    {member.role}
                  </p>
                </div>
                <p className="text-gray-700 text-center">{member.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
              Join Our Mission
            </h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto">
              Our dedicated team is passionate about empowering students to
              learn and excel in AI and Machine Learning. We believe that
              fostering curiosity and providing access to cutting-edge knowledge
              leads to better innovation and a brighter future. Join us in
              shaping the next generation of AI leaders!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
