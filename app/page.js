"use client";
import React from "react";
import Background from "@/components/background";
import Foreground from "@/components/foreground";
import "./globals.css";

const Page = () => {
  return(
    <div className="bg-purple-700 h-screen w-screen">
    <Background />
    <Foreground />
    </div>
  )
};
export default Page;