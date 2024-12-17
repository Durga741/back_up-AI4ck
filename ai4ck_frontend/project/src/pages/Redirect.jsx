import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationPage = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/dashboard'); // Navigate to the Dashboard page
  };

  const handleGoToHome = () => {
    navigate('/'); // Navigate to the Home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Welcome to the Navigation Page</h1>
        <button
          onClick={handleGoToDashboard}
          className="px-6 py-3 bg-blue-600 text-white rounded-md mb-4 mr-4"
        >
          Go to Dashboard
        </button>
        <button
          onClick={handleGoToHome}
          className="px-6 py-3 bg-green-600 text-white rounded-md"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NavigationPage;
