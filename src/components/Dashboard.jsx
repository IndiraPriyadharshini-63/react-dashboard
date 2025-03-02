import React from "react";

const Dashboard = () => {
  return (
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold mb-4 animate-fade-in">
        Welcome to Your Dashboard
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-5 bg-white shadow rounded-lg transition-transform duration-300 hover:scale-105">
          📊 Sales Data
        </div>
        <div className="p-5 bg-white shadow rounded-lg transition-transform duration-300 hover:scale-105">
          📈 Growth Metrics
        </div>
        <div className="p-5 bg-white shadow rounded-lg transition-transform duration-300 hover:scale-105">
          💰 Revenue Overview
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
