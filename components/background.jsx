"use client";
import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-purple-700 text-white">
      {/* h3 upar */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
        <h3 className="text-lg text-zinc-300">practice project..</h3>
      </div>

      {/* h1 center */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-6xl font-bold">React.js</h1>
      </div>
    </div>
  );
};

export default Background;
