"use client";
import React from "react";
import { LuFiles } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const Card = ({
  text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque hic assumenda, eaque qui temporibus.",
  showButton = true,
  buttonColor = "bg-green-600",
}) => {
  return (
    <motion.div
      className="card bg-zinc-800 w-[50vw] sm:w-48 md:w-56 rounded-4xl overflow-hidden flex flex-col max-h-full cursor-grab active:cursor-grabbing"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={1}
    >
      <div className="p-4 sm:p-5 pb-2 flex flex-col flex-grow">
        <div className="text-white mb-3">
          <LuFiles />
        </div>

        <div className="mb-4 sm:mb-6 flex-grow">
          <p className="text-white text-xs sm:text-sm">{text}</p>
        </div>

        <div className="flex flex-row justify-between">
          <h3 className="text-white text-xs sm:text-base">.9mb</h3>
          <div className="text-white bg-cyan-800 rounded-full p-1 sm:p-2 cursor-pointer">
            <RxCross2 className="text-xs sm:text-base" />
          </div>
        </div>
      </div>

      {showButton && (
        <button
          className={`w-[calc(100%+2rem)] sm:w-[calc(100%+2.5rem)] -ml-4 sm:-ml-5 -mr-4 sm:-mr-5 ${buttonColor} hover:bg-amber-500 text-white font-semibold py-2 sm:py-3 text-xs sm:text-base`}
        >
          Download Now
        </button>
      )}
    </motion.div>
  );
};

export default Card;
