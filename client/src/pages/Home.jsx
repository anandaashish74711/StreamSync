import React from "react";


const HomePage = () => {
  return (
    <div className="homepage-container bg-gray-800 h-screen flex flex-col justify-center items-center">
      <input
        className="mb-4 px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        type="email"
        placeholder="Enter Your email here"
      />
      <input
        className="mb-4 px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        type="text"
        placeholder="Enter your room Code"
      />
      <button className="h-10 px-3 bg-blue-700 text-white rounded-lg hover:bg-blue-900 focus:outline-none focus:ring focus:ring-red-200">
        Enter Room
      </button>
    </div>
  );
};

export default HomePage;
